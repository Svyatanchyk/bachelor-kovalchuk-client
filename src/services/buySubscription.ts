import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export interface IBuySubscriptionResponse {
  url: string;
}

export const buySubscription = async (
  subType: string
): Promise<IBuySubscriptionResponse> => {
  try {
    const res = await axiosInstance.post(API_ROUTES.subscription.buy, {
      subscriptionType: subType,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
