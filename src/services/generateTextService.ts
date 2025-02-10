import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

export const generateText = async (data: {
  country: string;
  language: string;
  nText: number;
  vertical: string;
}) => {
  const response = await axios.post(`${API_BASE_URL}/gpt/generate-text`, {
    country: data.country,
    language: data.language,
    nText: data.nText,
    vertical: data.vertical,
  });
  return response.data;
};
