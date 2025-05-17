import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IUpdateUserResponse {
  user: {
    _id: string;
    email: string;
    isverified: boolean;
    role: string;
    nickname: string;
    tokenBalance: number;
    provider: "google" | "local";
  };
}

export const updateUser = async (
  nickname: string
): Promise<IUpdateUserResponse> => {
  try {
    const res = await axiosInstance.patch(API_ROUTES.user.update, {
      nickname,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
