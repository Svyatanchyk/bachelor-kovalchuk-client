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
    provider: "google" | "local";
  };
  isAuthenticated: boolean;
}

export const authMe = async (
  token: string | null
): Promise<IAuthMeResponse> => {
  try {
    if (!token) {
      throw new Error("No token");
    }

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
