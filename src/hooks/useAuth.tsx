import { useQuery } from "@tanstack/react-query";
import { authMe } from "../services/authMe";

export const useAuth = () => {
  const accessToken = localStorage.getItem("accessToken");

  const { data, isError, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: () => authMe(accessToken!),
    enabled: !!accessToken,
    retry: false,
  });

  return {
    isAuthenticated: !!data?.isAuthenticated && !isError,
    user: data?.user || null,
    isLoading,
    isError,
  };
};
