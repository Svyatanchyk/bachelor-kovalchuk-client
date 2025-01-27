import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

export interface IResetPasswordResponse {
  message: string;
  status: string;
}

export interface IFormFields {
  email: string;
}

export const requestResetPassword = async (
  data: IFormFields
): Promise<IResetPasswordResponse> => {
  const response = await axios.post(
    `${API_BASE_URL}/user/request-reset-password`,
    data
  );

  return response.data;
};
