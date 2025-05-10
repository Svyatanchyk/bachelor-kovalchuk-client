import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export const saveCreatives = async (creatives: any[]) => {
  try {
    const res = await axiosInstance.post(API_ROUTES.creatives.save, {
      creatives,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
