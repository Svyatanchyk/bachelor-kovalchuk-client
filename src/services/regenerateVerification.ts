import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "../../axios";

export interface IRegenerateVerificationResponse {
  status: string;
  message: string;
}

export const regenerateVerification = async (
  userId: string
): Promise<IRegenerateVerificationResponse> => {
  const response = await axiosInstance.post(
    `${API_ROUTES.user.regenerateVerificationLink}/${userId}`
  );
  return response.data;
};
