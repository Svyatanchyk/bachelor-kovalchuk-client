import { useMutation } from "@tanstack/react-query";
import { withdrawCredits } from "../services/withdrawCredits";
import { enqueueSnackbar } from "notistack";
import { useUser } from "../context/UserContext";

export const useWithdrawCredits = () => {
  const { handleChangeUserBalance } = useUser();

  return useMutation({
    mutationFn: withdrawCredits,
    onSuccess: (data) => {
      handleChangeUserBalance(data.tokenBalance);
    },

    onError: (error: any) => {
      const status = error.response?.status;
      if (status === 403) {
        enqueueSnackbar("Недостатньо кредитів на балансі!", {
          variant: "error",
        });
      }

      console.error(
        "Error during generating text:",
        error.response?.data?.message || error.message
      );
    },
  });
};
