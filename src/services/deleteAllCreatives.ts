import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export const deleteAllCreatives = async () => {
  try {
    const res = await axiosInstance.delete(API_ROUTES.creatives.deleteAll);

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
