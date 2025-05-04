import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";
import { User } from "./loginService";

export interface IConfirmVerificationResponse {
  status: string;
  isExpired: boolean;
  message: string;
  accessToken: string;
  user: User;
}

export const confirmVerification = async (
  userId: string,
  uniqueString: string
): Promise<IConfirmVerificationResponse> => {
  const response = await axiosInstance.post(
    `${API_ROUTES.user.confirmVerification}/${userId}/${uniqueString}`
  );

  return response.data;
};
