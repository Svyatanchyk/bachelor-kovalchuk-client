import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IGetSubscriptionResponse {
  status: string;
  subscription: {
    _id: string;
    subType: string;
    status: string;
    startDate: Date;
    endDate: Date;
  };
}

export const getSubscription = async (): Promise<IGetSubscriptionResponse> => {
  try {
    const res = await axiosInstance.get(API_ROUTES.subscription.get);

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
