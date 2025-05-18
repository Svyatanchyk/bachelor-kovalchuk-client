import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IGoogleAuthResponse {
  user: {
    userId: string;
    email: string;
    tokenBalance: number;
    nickname: string;
    role: string;
    provider: "google" | "local";
  };
  accessToken: string;
}

export const googleAuth = async (
  code: string
): Promise<IGoogleAuthResponse> => {
  try {
    const res = await axiosInstance.post(API_ROUTES.user.googleAuth, { code });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
