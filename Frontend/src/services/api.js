import axios from "axios";

export const sendMessage = async (
  symptom
) => {

  const response =
    await axios.post(
      "https://the-health-card-chatassistant.onrender.com/",
      {
        symptom
      }
    );

  return response.data;
};