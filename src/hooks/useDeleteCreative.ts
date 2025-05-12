import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCreative } from "../services/deleteCreative";
import { enqueueSnackbar } from "notistack";

export const useDeleteCreative = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCreative,
    onSuccess: () => {
      enqueueSnackbar("Креатив успішно видалено", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["creatives"] });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося видалити креатив", { variant: "error" });
    },
  });
};
