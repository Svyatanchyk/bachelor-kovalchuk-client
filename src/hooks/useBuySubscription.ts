import { IBuySubscriptionResponse } from "./../services/buySubscription";
import { useMutation } from "@tanstack/react-query";
import { buySubscription } from "../services/buySubscription";
import { enqueueSnackbar } from "notistack";

export const useBuySubscription = () => {
  return useMutation({
    mutationFn: buySubscription,
    onSuccess: (data: IBuySubscriptionResponse) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: () => {
      enqueueSnackbar("Виникла помилка, будьласка спробуйте пізніше", {
        variant: "error",
      });
    },
  });
};
