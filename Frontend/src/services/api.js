import axios from "axios";

export const sendMessage = async (symptom) => {
  const response = await axios.post(
    "https://health-card-chatassistant.netlify.app/api/chat",
    {
      symptom
    }
  );

  return response.data;
};