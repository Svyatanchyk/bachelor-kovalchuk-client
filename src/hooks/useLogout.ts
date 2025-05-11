import { useMutation } from "@tanstack/react-query";
import { logout } from "../services/logout";

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
