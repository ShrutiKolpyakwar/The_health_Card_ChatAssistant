// const express = require("express");

// const router = express.Router();

// const providers = require("../data/providers.json");

// router.post("/", (req, res) => {

//   const { symptom } = req.body;

//   console.log("Received:", symptom);

//   const normalizedInput = symptom
//     .toLowerCase()
//     .replace("i have ", "")
//     .replace("pain in ", "")
//     .trim();

//   console.log("Normalized:", normalizedInput);

//   const matchedProviders = providers.filter(
//     provider =>
//       provider.symptoms.some(
//         item =>
//           item.toLowerCase().includes(normalizedInput)
//       )
//   );

//   console.log("Matches:", matchedProviders);

//   if (matchedProviders.length === 0) {
//     return res.json({
//       message:
//         "I cannot diagnose diseases. Please consult a healthcare professional.",
//       providers: []
//     });
//   }

//   res.json({
//     message:
//       "I am not a doctor. Here are some providers that may help.",
//     providers: matchedProviders
//   });

// });

// module.exports = router;

const symptomMap = {
  "ear pain": "ear pain",
  "pain in ear": "ear pain",
  "earache": "ear pain",

  "skin rash": "skin rash",
  "rash": "skin rash",

  "chest pain": "chest pain",
  "pain in chest": "chest pain",

  "hair fall": "hair loss",
  "hairfall": "hair loss"
};

const express = require("express");

const router = express.Router();

const providers = require("../data/providers.json");

router.post("/", (req, res) => {
  const { symptom } = req.body;

  console.log("Received:", symptom);

  const normalizedInput = symptom
    .toLowerCase()
    .replace("i have", "")
    .replace("pain in", "")
    .replace("my", "")
    .trim();

  console.log("Normalized:", normalizedInput);

 const matchedProviders = providers.filter(provider =>
  provider.symptoms.some(item => {
    const symptomText = item.toLowerCase().trim();

    return (
      normalizedInput === symptomText ||
      normalizedInput.includes(symptomText) ||
      symptomText.includes(normalizedInput)
    );
  })
);
  console.log("Matches:", matchedProviders);

  if (matchedProviders.length === 0) {
    return res.json({
      message:
        "Sorry, I couldn't identify the symptom clearly. Please provide more details about your condition.",
      providers: []
    });
  }

  res.json({
    message:
      "I am not a doctor. Here are some healthcare providers that may help you:",
    providers: matchedProviders
  });
});

module.exports = router;