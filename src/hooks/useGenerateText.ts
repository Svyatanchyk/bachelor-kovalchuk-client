import { useMutation } from "@tanstack/react-query";
import { generateText } from "../services/generateTextService";

export const useGenerateText = () => {
  return useMutation({
    mutationFn: generateText,
    onSuccess: (data: any) => {
      console.log("Text:", data);
    },
    onError: (error: any) => {
      console.error(
        "Error during generating text:",
        error.response?.data?.message || error.message
      );
    },
  });
};
