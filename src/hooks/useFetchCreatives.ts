import { useQuery } from "@tanstack/react-query";
import { fetchCreatives } from "../services/fetchCreatives";

export const useFetchCreatives = () => {
  return useQuery({
    queryFn: fetchCreatives,
    queryKey: ["creatives"],
  });
};
