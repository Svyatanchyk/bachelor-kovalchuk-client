import { useQuery } from "@tanstack/react-query";
import { getSubscription } from "../services/getSubscription";

export const useGetSubscription = () => {
  return useQuery({
    queryFn: getSubscription,
    queryKey: ["userSubscription"],
  });
};
