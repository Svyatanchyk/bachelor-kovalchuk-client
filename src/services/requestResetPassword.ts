import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

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
  const response = await axiosInstance.post(
    API_ROUTES.user.requestPasswordReset,
    data
  );

  return response.data;
};
