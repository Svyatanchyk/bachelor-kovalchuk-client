import { useMutation } from "@tanstack/react-query";
import { ISignUpResponse, signUpRequest } from "../services/signupService";

export const useSignUp = (
  onSuccess: (data: ISignUpResponse) => void,
  onError: (error: any) => void
) => {
  return useMutation({
    mutationFn: signUpRequest,
    onSuccess,
    onError,
  });
};
