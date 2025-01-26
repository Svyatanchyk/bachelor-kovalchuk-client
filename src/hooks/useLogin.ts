import { useMutation } from "@tanstack/react-query";
import { ISignInResponse, signInRequest } from "../services/loginService";

export const useLogin = (
  onSuccess: (data: ISignInResponse) => void,
  onError: (error: any) => void
) => {
  return useMutation({
    mutationFn: signInRequest,
    onSuccess: onSuccess,
    onError: onError,
  });
};
