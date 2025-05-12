import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { deleteAllCreatives } from "../services/deleteAllCreatives";

export const useDeleteAllCreatives = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAllCreatives,
    onSuccess: () => {
      enqueueSnackbar("Креативи успішно видалено", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["creatives"] });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося видалити креативи", { variant: "error" });
    },
  });
};
