import { useState } from "react";
import ConfirmDialog from "../../../../components/ConfirmDialog/ConfirmDialog";
import { StyledButton } from "./styled";
import Button from "../../../../components/Buttons/Button";
import { DialogActions, DialogContent } from "@mui/material";
import FormInput from "../../../../components/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { validation } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useChangePassword } from "../../../../hooks/useChangePassword";
import Loader from "../../../../components/Loader";

interface IFormFields {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

const ChangePassword = () => {
  const [isChangePasswordDialogOpen, setIsChangePasswordDialogOpen] =
    useState<boolean>(false);

  const handleCloseDialog = () => {
    setIsChangePasswordDialogOpen(false);
    reset();
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormFields>({ resolver: yupResolver(validation) });

  const { mutate: changePasswordMutate, isPending } =
    useChangePassword(handleCloseDialog);

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    const { oldPassword, newPassword } = data;

    const payload = {
      oldPassword,
      newPassword,
    };

    changePasswordMutate(payload);
  };

  return (
    <>
      <StyledButton
        onClick={() => setIsChangePasswordDialogOpen(true)}
        sx={{ mb: 2, color: "#E5D0FE" }}
      >
        Змінити пароль
      </StyledButton>

      <ConfirmDialog
        title="Зміна паролю"
        isDialogOpen={isChangePasswordDialogOpen}
        handleClose={handleCloseDialog}
      >
        <DialogContent sx={{ padding: 0.5 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              name="oldPassword"
              control={control}
              errors={errors}
              type="password"
              label="Введіть старий пароль"
            />

            <FormInput
              name="newPassword"
              control={control}
              errors={errors}
              type="password"
              label="Введіть новий пароль"
            />

            <FormInput
              name="repeatNewPassword"
              control={control}
              errors={errors}
              type="password"
              label="Повторіть новий пароль"
            />

            <DialogActions sx={{ padding: 0, mt: 2 }}>
              {isPending ? (
                <Loader />
              ) : (
                <>
                  <Button
                    sx={{ paddingY: 1, fontSize: "0.9rem" }}
                    onClick={handleCloseDialog}
                  >
                    Скасувати
                  </Button>
                  <Button
                    type="submit"
                    sx={{ paddingY: 1, fontSize: "0.9rem" }}
                  >
                    Підтвердити
                  </Button>
                </>
              )}
            </DialogActions>
          </form>
        </DialogContent>
      </ConfirmDialog>
    </>
  );
};

export default ChangePassword;
