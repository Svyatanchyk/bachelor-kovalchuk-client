import { useMutation } from "@tanstack/react-query";
import { saveCreatives } from "../services/saveCreatives";
import { enqueueSnackbar } from "notistack";

export const useSaveCreatives = () => {
  return useMutation({
    mutationFn: saveCreatives,
    onSuccess: () => {
      enqueueSnackbar("Креативи збережено", { variant: "success" });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося зберегти креативи", { variant: "error" });
    },
  });
};
