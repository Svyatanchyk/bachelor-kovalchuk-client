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
}

export interface ISignInResponse {
  message: string;
  accessToken: string;
  data?: User;
}

export const signInRequest = async (
  data: IFormFields
): Promise<ISignInResponse> => {
  const response = await axiosInstance.post(API_ROUTES.user.signIn, data);
  console.log(response);

  return response.data;
};
