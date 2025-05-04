import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";
// import { creativeTexts } from "../pages/GenerateCreative/texts";

export const generateText = async (data: {
  country: string;
  language: string;
  nText: number;
  vertical: string;
  price: number;
}) => {
  const response = await axiosInstance.post(API_ROUTES.gpt.generateText, {
    country: data.country,
    language: data.language,
    nText: data.nText,
    vertical: data.vertical,
    price: data.price,
  });

  // response.data.text = creativeTexts;

  return response.data;
};
