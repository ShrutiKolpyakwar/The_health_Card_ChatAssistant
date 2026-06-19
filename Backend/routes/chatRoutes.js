const express = require("express");
const router = express.Router();
const stringSimilarity = require("string-similarity");

const providers = require("../data/providers.json");

// Normalize text
const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

router.post("/", (req, res) => {
  const { symptom } = req.body;

  if (!symptom) {
    return res.json({
      message: "Please enter a symptom.",
      providers: []
    });
  }

  const userInput = normalize(symptom);

  // =========================
// SHOW ALL PROVIDERS
// =========================

if (
  userInput.includes("all providers") ||
  userInput.includes("all doctors") ||
  userInput.includes("all specialties") ||
  userInput.includes("all services") ||
  userInput.includes("provider list") ||
  userInput.includes("give me all providers")
) {
  const providerList = providers
    .map(provider => {
      const services = provider.services
        ? provider.services.join(", ")
        : "Services not available";

      return `
🏥 ${provider.name}
🩺 ${provider.specialty}
🔧 Services: ${services}
      `;
    })
    .join("\n\n");

  return res.json({
    message: providerList,
    providers: []
  });
}

  // =========================
  // PHONE / LOCATION SEARCH
  // =========================

  const wantsPhone =
    userInput.includes("phone") ||
    userInput.includes("contact") ||
    userInput.includes("number") ||
    userInput.includes("mobile") ||
    userInput.includes("call");

  const wantsLocation =
    userInput.includes("location") ||
    userInput.includes("address") ||
    userInput.includes("where");

  if (wantsPhone || wantsLocation) {
    let matchedProviders = [];

    // --------------------------------
    // 1. Exact Provider Name Match
    // --------------------------------

    matchedProviders = providers.filter(provider => {
      const providerName = normalize(provider.name);

      return (
        userInput.includes(providerName) ||
        providerName.includes(userInput)
      );
    });

    // --------------------------------
    // 2. Partial Provider Name Match
    // --------------------------------

    if (matchedProviders.length === 0) {
      matchedProviders = providers.filter(provider => {
        const words = normalize(provider.name)
          .split(" ")
          .filter(word => word.length > 3);

        const matchedWords = words.filter(word =>
          userInput.includes(word)
        );

        return matchedWords.length >= 2;
      });
    }

    // --------------------------------
    // 3. Specialty Match
    // --------------------------------

    if (matchedProviders.length === 0) {
      matchedProviders = providers.filter(provider =>
        userInput.includes(
          normalize(provider.specialty)
        )
      );
    }

    // --------------------------------
    // 4. Fuzzy Provider Name Match
    // --------------------------------

    if (matchedProviders.length === 0) {
      let bestProvider = null;
      let bestScore = 0;

      providers.forEach(provider => {
        const score =
          stringSimilarity.compareTwoStrings(
            userInput,
            normalize(provider.name)
          );

        if (score > bestScore) {
          bestScore = score;
          bestProvider = provider;
        }
      });

      if (bestProvider && bestScore > 0.35) {
        matchedProviders = [bestProvider];
      }
    }

    // --------------------------------
    // 5. Location Filter
    // --------------------------------

    const locationMatches = matchedProviders.filter(provider =>
      userInput.includes(
        normalize(provider.location)
      )
    );

    if (locationMatches.length > 0) {
      matchedProviders = locationMatches;
    }

    // --------------------------------
    // Return Results
    // --------------------------------

    if (matchedProviders.length > 0) {
      const result = matchedProviders
        .map(provider => {
          let text = `🏥 ${provider.name}`;

          if (wantsPhone) {
            text += `\n📞 ${provider.phone}`;
          }

          if (wantsLocation) {
            text += `\n📍 ${provider.location}`;
          }

          return text;
        })
        .join("\n\n");

      return res.json({
        message: result,
        providers: []
      });
    }

    return res.json({
      message:
        "Sorry, I couldn't find a provider matching your request.",
      providers: []
    });
  }

  // =========================
  // SYMPTOM MATCHING
  // =========================

  let bestProvider = null;
  let bestScore = 0;

  providers.forEach(provider => {
    provider.symptoms.forEach(providerSymptom => {
      const score =
        stringSimilarity.compareTwoStrings(
          userInput,
          providerSymptom.toLowerCase()
        );

      if (score > bestScore) {
        bestScore = score;
        bestProvider = provider;
      }
    });
  });

  if (bestProvider && bestScore > 0.2) {
    return res.json({
      message:
        "I am not a doctor. Here is a healthcare provider that may help you.",
      providers: [bestProvider]
    });
  }

  return res.json({
    message:
      "Sorry, I couldn't identify the symptom clearly. Please provide more details.",
    providers: []
  });
});

module.exports = router;