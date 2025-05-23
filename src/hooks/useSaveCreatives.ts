import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveCreatives } from "../services/saveCreatives";
import { enqueueSnackbar } from "notistack";

export const useSaveCreatives = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: saveCreatives,
    onSuccess: () => {
      enqueueSnackbar("Креативи збережено", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["creatives"] });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося зберегти креативи", { variant: "error" });
    },
  });
};
