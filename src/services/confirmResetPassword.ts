import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IFormFields {
  password: string;
  confirmPassword: string;
}

export interface IResetPasswordResponse {
  status: string;
  message: string;
}

export const confirmResetPassword = async (
  newPassword: string,
  resetString: string,
  userId: string
): Promise<IResetPasswordResponse> => {
  const response = await axiosInstance.post(API_ROUTES.user.resetPassword, {
    newPassword,
    resetString,
    userId,
  });
  return response.data;
};
