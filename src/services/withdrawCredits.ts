import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IResponse {
  status: string;
  tokenBalance: number;
}

export const withdrawCredits = async (price: number): Promise<IResponse> => {
  try {
    const res = await axiosInstance.patch(API_ROUTES.user.withdrawCredits, {
      price,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
