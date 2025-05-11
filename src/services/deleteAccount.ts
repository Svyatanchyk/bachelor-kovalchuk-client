import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export const deleteAccount = async () => {
  try {
    const res = await axiosInstance.delete(API_ROUTES.user.deleteAccount);

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
