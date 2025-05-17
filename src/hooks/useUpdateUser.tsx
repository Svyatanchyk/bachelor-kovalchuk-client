import { useMutation } from "@tanstack/react-query";
import { IUpdateUserResponse, updateUser } from "../services/updateUser";
import { enqueueSnackbar } from "notistack";
import { useUser } from "../context/UserContext";

export const useUpdateUser = () => {
  const { setUserData } = useUser();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data: IUpdateUserResponse) => {
      enqueueSnackbar("Нікнейм оновлено успішно", { variant: "success" });
      setUserData({
        userId: data.user._id,
        email: data.user.email,
        tokenBalance: data.user.tokenBalance,
        nickname: data.user.nickname,
        role: data.user.role,
        provider: data.user.provider,
      });
    },
    onError: () => {
      enqueueSnackbar("Не вдалося оновити нікнейм", { variant: "error" });
    },
  });
};
