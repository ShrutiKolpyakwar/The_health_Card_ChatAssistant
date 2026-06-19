import axios from "axios";

export const sendMessage = async (
  symptom
) => {

  const response =
    await axios.post(
      "https://healthcard-ee1c2xby7-shrutikolpyakwars-projects.vercel.app/",
      {
        symptom
      }
    );

  return response.data;
};