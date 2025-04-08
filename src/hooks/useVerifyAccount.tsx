import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {
  confirmVerification,
  IConfirmVerificationResponse,
} from "../services/confirmVerification";
import { useNavigate } from "react-router-dom";

export const useVerifyAccount = (userId?: string, uniqueString?: string) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const navigate = useNavigate();

  const clearState = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
    setIsExpired(false);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      if (!userId || !uniqueString) {
        throw new Error("Invalid verification parameters.");
      }
      return confirmVerification(userId, uniqueString);
    },

    onSuccess: (data: IConfirmVerificationResponse) => {
      setSuccessMessage(data.message);
      setErrorMessage(null);
      setIsExpired(data.isExpired);
      clearState();
      navigate("/");
    },
    onError: (error: any) => {
      setSuccessMessage(null);
      setErrorMessage(error.response?.data?.message || error.message);
      setIsExpired(error.response?.data?.isExpired);
    },
  });

  return { mutate, isPending, successMessage, errorMessage, isExpired };
};
