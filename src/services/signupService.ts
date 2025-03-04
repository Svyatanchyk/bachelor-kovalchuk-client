import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

export interface IFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignUpResponse {
  status: string;
  message: string;
}

export const signUpRequest = async (
  data: IFormFields
): Promise<ISignUpResponse> => {
  const response = await axiosInstance.post(API_ROUTES.user.signUp, data);
  return response.data;
};
