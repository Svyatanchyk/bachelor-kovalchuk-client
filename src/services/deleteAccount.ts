import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export const deleteAccount = async (password: string) => {
  try {
    const res = await axiosInstance.delete(API_ROUTES.user.deleteAccount, {
      data: { password },
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
