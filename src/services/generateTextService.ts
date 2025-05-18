import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

export const generateText = async (data: {
  country: string;
  language: string;
  nText: number;
  vertical: string;
  price: number;
}) => {
  try {
    const response = await axiosInstance.post(API_ROUTES.gpt.generateText, {
      country: data.country,
      language: data.language,
      nText: data.nText,
      vertical: data.vertical,
      price: data.price,
    });

    return response.data;
  } catch (error: any) {
    throw error;
  }
};
