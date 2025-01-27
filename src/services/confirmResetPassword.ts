import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

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
  const response = await axios.post(`${API_BASE_URL}/user/reset-password`, {
    newPassword,
    resetString,
    userId,
  });
  return response.data;
};
