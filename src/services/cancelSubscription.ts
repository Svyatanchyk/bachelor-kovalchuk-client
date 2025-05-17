import axiosInstance from "../../axios";
import { API_ROUTES } from "../constants/apiRoutes";

export const cancelSubscription = async () => {
  try {
    const res = await axiosInstance.delete(API_ROUTES.subscription.cancel);

    return res.data;
  } catch (error) {}
};
