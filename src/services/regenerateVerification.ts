import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

export interface IRegenerateVerificationResponse {
  status: string;
  message: string;
}

export const regenerateVerification = async (
  userId: string
): Promise<IRegenerateVerificationResponse> => {
  const response = await axios.post(
    `${API_BASE_URL}/user/regenerate/verification/${userId}`
  );
  return response.data;
};
