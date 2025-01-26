import axios from "axios";
import { API_BASE_URL } from "../constants/apiRoutes";

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
  const response = await axios.post(`${API_BASE_URL}/user/signup`, data);
  return response.data;
};
