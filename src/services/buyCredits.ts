import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IBuyCreditsResponse {
  url: string;
}

export const buyCredits = async (
  creditsAmount: number
): Promise<IBuyCreditsResponse> => {
  try {
    const res = await axiosInstance.post(API_ROUTES.credits.buy, {
      amount: creditsAmount,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
