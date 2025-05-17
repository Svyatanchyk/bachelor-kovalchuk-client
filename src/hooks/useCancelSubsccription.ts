import { useMutation } from "@tanstack/react-query";
import { cancelSubscription } from "../services/cancelSubscription";
import { enqueueSnackbar } from "notistack";
import { useUser } from "../context/UserContext";

export const useCancelSubcription = () => {
  const { resetSubscription } = useUser();

  return useMutation({
    mutationFn: cancelSubscription,
    onSuccess: () => {
      enqueueSnackbar("Підписку скасовано", { variant: "success" });
      resetSubscription();
    },
    onError: () => {
      enqueueSnackbar("Не вдалося скасувати підписку", { variant: "error" });
    },
  });
};
