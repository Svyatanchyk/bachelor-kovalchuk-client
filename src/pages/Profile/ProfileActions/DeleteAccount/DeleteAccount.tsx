import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { StyledButton, StyledCheckBox } from "./styled";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmDialog from "../../../../components/ConfirmDialog/ConfirmDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../../../components/FormInput";
import { Box, DialogActions, DialogContent, Typography } from "@mui/material";
import { useDeleteAccount } from "../../../../hooks/useDeleteAccount";
import { useUser } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";

interface Props {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  isDialogOpen: boolean;
}

interface IFormFields {
  password: string;
}

const DeleteAccount = ({ setIsDialogOpen, isDialogOpen }: Props) => {
  const { resetUser, setIsAuthenticated, user } = useUser();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    resetUser();
    setIsAuthenticated(false);
    navigate("/");
  };

  const { mutate: deleteAccount } = useDeleteAccount(handleLogout);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>();

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log("Deleting account");
    deleteAccount(data.password);
  };

  return (
    <>
      <StyledButton
        onClick={() => setIsDialogOpen(true)}
        startIcon={<DeleteIcon />}
        sx={{ maxWidth: "300px", color: "#E5D0FE" }}
      >
        Видалити аккаунт
      </StyledButton>

      <ConfirmDialog
        title="Видалення аккаунту"
        isDialogOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      >
        <DialogContent sx={{ padding: 0.5 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {user?.provider === "local" && (
              <FormInput
                name="password"
                control={control}
                errors={errors}
                type="password"
                label="Введіть свій пароль"
              />
            )}

            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "flex-start",
                mt: 2,
              }}
            >
              <StyledCheckBox
                checked={isChecked}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setIsChecked(e.target.checked)
                }
                disableRipple
              />
              <Typography sx={{ color: "#5B3B81", fontSize: "0.9rem" }}>
                Я погоджуюсь з тим що всі мої данні будуть видалені, та не
                піддаються відновленню
              </Typography>
            </Box>

            <DialogActions sx={{ padding: 0, mt: 2 }}>
              <Button
                sx={{ paddingY: 1, fontSize: "0.9rem" }}
                onClick={() => setIsDialogOpen(false)}
              >
                Скасувати
              </Button>
              <Button
                type="submit"
                disabled={!isChecked}
                sx={{ paddingY: 1, fontSize: "0.9rem" }}
              >
                Підтвердити
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </ConfirmDialog>
    </>
  );
};

export default DeleteAccount;
