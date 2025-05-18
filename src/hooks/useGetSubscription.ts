import { useQuery } from "@tanstack/react-query";
import { getSubscription } from "../services/getSubscription";

export const useGetSubscription = () => {
  const token = localStorage.getItem("accessToken");

  return useQuery({
    queryFn: getSubscription,
    queryKey: ["userSubscription"],
    enabled: !!token,
  });
};
