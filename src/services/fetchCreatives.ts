import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IGetCreativesResponse {
  creatives: any[];
  status: string;
  message: string;
}

export const fetchCreatives = async (): Promise<IGetCreativesResponse> => {
  try {
    const res = await axiosInstance.get(API_ROUTES.creatives.fetch);

    console.log("fetchCreatives: ", res.data);

    return res.data;
  } catch (error) {
    console.error("Error fetching creatives:", error);
    return {
      creatives: [],
      status: "FAILED",
      message: "An error occurred while fetching creatives.",
    };
  }
};
