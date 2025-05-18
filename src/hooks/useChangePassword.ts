import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../services/changePassword";
import { enqueueSnackbar } from "notistack";

export const useChangePassword = (handleCloseDialog: () => void) => {
  return useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      handleCloseDialog();
      enqueueSnackbar("Пароль змінено успішно", { variant: "success" });
    },
    onError: () => {
      enqueueSnackbar("Виникла помилка при змінені паролю", {
        variant: "error",
      });
    },
  });
};
