import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCreative } from "../services/updateCreative";
import { enqueueSnackbar } from "notistack";

export const useUpdateCreative = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCreative,
    onSuccess: () => {
      enqueueSnackbar("Креатив успішно оновлено", { variant: "success" });
      queryClient.invalidateQueries({ queryKey: ["creatives"] });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося оновити кратив", { variant: "error" });
    },
  });
};
