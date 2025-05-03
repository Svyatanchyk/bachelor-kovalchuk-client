import { useMutation } from "@tanstack/react-query";
import { generateText } from "../services/generateTextService";
import { useUser } from "../context/UserContext";

export const useGenerateText = () => {
  const { handleChangeUserBalance } = useUser();

  return useMutation({
    mutationFn: generateText,
    onSuccess: (data: any) => {
      console.log("Text:", data);
      handleChangeUserBalance(data.tokenBalance);
    },
    onError: (error: any) => {
      console.error(
        "Error during generating text:",
        error.response?.data?.message || error.message
      );

      console.log(error);
    },
  });
};
