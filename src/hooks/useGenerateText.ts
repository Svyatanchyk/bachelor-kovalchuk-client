import { useMutation } from "@tanstack/react-query";
import { generateText } from "../services/generateTextService";
import { useUser } from "../context/UserContext";
import { enqueueSnackbar } from "notistack";

export const useGenerateText = () => {
  const { handleChangeUserBalance } = useUser();

  return useMutation({
    mutationFn: generateText,
    onSuccess: (data: any) => {
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
