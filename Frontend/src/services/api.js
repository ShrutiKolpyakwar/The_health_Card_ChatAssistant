import axios from "axios";

export const sendMessage = async (symptom) => {
  const response = await axios.post(
    "http://localhost:5000/api/chat",
    {
      symptom
    }
  );

  return response.data;
};