import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

export interface IFormFields {
  email: string;
  password: string;
}

export interface ISignInResponse {
  status: string;
  message: string;
  accessToken: string;
  data?: {
    userId: string;
  };
}

export const signInRequest = async (
  data: IFormFields
): Promise<ISignInResponse> => {
  const response = await axiosInstance.post(API_ROUTES.user.signIn, data);
  console.log(response);

  return response.data;
};
