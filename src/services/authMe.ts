import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IAuthMeResponse {
  user: {
    _id: string;
    email: string;
    isverified: boolean;
    role: string;
    nickname: string;
    tokenBalance: number;
  };
  isAuthenticated: boolean;
}

export const authMe = async (token: string): Promise<IAuthMeResponse> => {
  try {
    const response = await axiosInstance.get(API_ROUTES.user.authMe, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("User is not authenticated:", error);
    throw new Error("User is not authenticated");
  }
};
