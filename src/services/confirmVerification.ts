import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

export interface IConfirmVerificationResponse {
  status: string;
  isExpired: boolean;
  message: string;
}

export const confirmVerification = async (
  userId: string,
  uniqueString: string
): Promise<IConfirmVerificationResponse> => {
  const response = await axios.post(
    `${API_BASE_URL}/user/verify/${userId}/${uniqueString}`
  );

  return response.data;
};
