import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface ISaveCreativesResponse {
  creatives: {
    _id: string;
    userId: string;
    creative: any;
  }[];
}

export const saveCreatives = async (
  creatives: any[]
): Promise<ISaveCreativesResponse> => {
  try {
    const res = await axiosInstance.post(API_ROUTES.creatives.save, {
      creatives,
    });

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
