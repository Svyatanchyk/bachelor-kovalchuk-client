import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface updateCreativeProps {
  creativeId: string;
  creative: any;
}

export const updateCreative = async (params: updateCreativeProps) => {
  try {
    console.log("Params", params);

    const res = await axiosInstance.patch(
      `${API_ROUTES.creatives.update}/${params.creativeId}`,
      {
        creative: params.creative,
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
