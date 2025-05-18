import { useQuery } from "@tanstack/react-query";
import { authMe } from "../services/authMe";

export const useAuth = () => {
  const accessToken = localStorage.getItem("accessToken");

  const { data, isError, isPending, refetch, status } = useQuery({
    queryKey: ["auth"],
    queryFn: () => authMe(accessToken!),
    retry: false,
  });

  return {
    isAuthenticated: accessToken && data?.isAuthenticated,
    user: data?.user || null,
    isPending,
    isError,
    refetch,
    status,
  };
};
