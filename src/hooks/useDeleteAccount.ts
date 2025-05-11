import { useMutation } from "@tanstack/react-query";
import { deleteAccount } from "../services/deleteAccount";
import { enqueueSnackbar } from "notistack";

export const useDeleteAccount = (handleLogout: () => void) => {
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      handleLogout();
      enqueueSnackbar("Акаунт успішно видалено", { variant: "success" });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося видалити акаунт", { variant: "error" });
    },
  });
};
