import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

export interface IFormFields {
  email: string;
  password: string;
}

export interface ISignInResponse {
  status: string;
  message: string;
  data?: {
    userId: string;
  };
}

export const signInRequest = async (
  data: IFormFields
): Promise<ISignInResponse> => {
  const response = await axios.post(`${API_BASE_URL}/user/signin`, data);
  console.log(response);

  return response.data;
};
