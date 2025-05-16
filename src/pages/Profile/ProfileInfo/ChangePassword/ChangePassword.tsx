import { useState } from "react";
import ConfirmDialog from "../../../../components/ConfirmDialog/ConfirmDialog";
import { StyledButton } from "./styled";

const ChangePassword = () => {
  const [isChangePasswordDialogOpen, setIsChangePasswordDialogOpen] =
    useState<boolean>(false);

  return (
    <>
      <StyledButton sx={{ mb: 2, color: "#E5D0FE" }}>
        Змінити пароль
      </StyledButton>

      <ConfirmDialog
        title="Введіть старий та новий пароль"
        isDialogOpen={isChangePasswordDialogOpen}
        handleClose={() => setIsChangePasswordDialogOpen(false)}
      />
    </>
  );
};

export default ChangePassword;
