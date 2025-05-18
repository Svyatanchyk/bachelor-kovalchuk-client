import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

export interface IFormFields {
  email: string;
  password: string;
}

export interface User {
  userId: string;
  userEmail: string;
  tokenBalance: string;
  nickname: string;
  provider: "google" | "local";
}

export interface ISignInResponse {
  message: string;
  accessToken: string;
  user: User;
}

export const signInRequest = async (
  data: IFormFields
): Promise<ISignInResponse> => {
  try {
    const response = await axiosInstance.post(API_ROUTES.user.signIn, data);

    return response.data;
  } catch (error) {
    throw Error();
  }
};
