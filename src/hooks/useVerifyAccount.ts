import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {
  confirmVerification,
  IConfirmVerificationResponse,
} from "../services/confirmVerification";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export const useVerifyAccount = (userId?: string, uniqueString?: string) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const { setUserData, setIsAuthenticated } = useUser();

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
      console.log("Verification successful:", data);

      localStorage.setItem("accessToken", data.accessToken);

      console.log("User data:", data.user);

      setUserData({
        userId: data.user.userId,
        email: data.user.userEmail,
        tokenBalance: Number(data.user?.tokenBalance),
        nickname: data.user?.nickname,
        provider: data.user.provider,
      });

      setIsAuthenticated(true);

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
