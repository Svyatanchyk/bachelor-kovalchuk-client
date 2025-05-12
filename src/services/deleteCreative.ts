import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export const deleteCreative = async (creativeId: string) => {
  try {
    const res = await axiosInstance.delete(
      `${API_ROUTES.creatives.delete}/${creativeId}`
    );

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
