import { useMutation } from "@tanstack/react-query";
import { buyCredits, IBuyCreditsResponse } from "../services/buyCredits";
import { enqueueSnackbar } from "notistack";

export const userBuyCredits = () => {
  return useMutation({
    mutationFn: buyCredits,
    onSuccess: (data: IBuyCreditsResponse) => {
      console.log("Payment result:", data);

      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: () => {
      enqueueSnackbar("Виникла помилка, будьласка спробуйте пізніше");
    },
  });
};
