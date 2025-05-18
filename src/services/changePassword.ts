import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface Params {
  newPassword: string;
  oldPassword: string;
}

export const changePassword = async (payload: Params) => {
  try {
    const { newPassword, oldPassword } = payload;

    console.log(payload);

    const res = await axiosInstance.patch(API_ROUTES.user.changePassword, {
      newPassword,
      oldPassword,
    });

    return res.data;
  } catch (error) {
    console.log("An error occured while changing password", error);
    throw error;
  }
};
