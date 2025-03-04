import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

export const generateText = async (data: {
  country: string;
  language: string[];
  nText: number;
  vertical: string;
}) => {
  const response = await axiosInstance.post(API_ROUTES.gpt.generateText, {
    country: data.country,
    language: data.language,
    nText: data.nText,
    vertical: data.vertical,
  });
  return response.data;
};
