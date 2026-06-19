const express = require("express");
const router = express.Router();
const stringSimilarity = require("string-similarity");

const providers = require("../data/providers.json");

router.post("/", (req, res) => {
  const { symptom } = req.body;

  if (!symptom) {
    return res.json({
      message: "Please enter a symptom.",
      providers: []
    });
  }

  const userInput = symptom.toLowerCase().trim();

  let bestProvider = null;
  let bestScore = 0;

  providers.forEach(provider => {
    provider.symptoms.forEach(providerSymptom => {
      const score = stringSimilarity.compareTwoStrings(
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