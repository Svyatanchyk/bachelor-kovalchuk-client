import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { Alert, Box } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "../../components/Loader";
import {
  StyledForgotPasswordForm,
  StyledFrogotPasswordContainer,
  StyledFrogotPasswordWrapper,
  StyledTypography,
} from "./styled";

import {
  IFormFields,
  IResetPasswordResponse,
  requestResetPassword,
} from "../../services/requestResetPassword";
import Button from "../../components/Buttons/Button";

const ForgotPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { isPending, mutate } = useMutation({
    mutationFn: requestResetPassword,
    onSuccess: (data: IResetPasswordResponse) => {
      setSuccessMessage(data.message);
      setErrorMessage(null);
    },
    onError: (error: any) => {
      setSuccessMessage(null);
      setErrorMessage(error.response?.data?.message || error.message);
    },
  });

  const onSubmit = (data: IFormFields) => {
    console.log(data);
    mutate(data);
  };

  return (
    <StyledFrogotPasswordWrapper>
      <StyledFrogotPasswordContainer>
        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
        </Box>

        {!!successMessage || (
          <StyledForgotPasswordForm onSubmit={handleSubmit(onSubmit)}>
            <StyledTypography>Не можете увійти?</StyledTypography>
            <StyledTypography sx={{ fontSize: "1rem" }}>
              Введіть свію пошту і ми надішлемо посилання для відновлення
              доступу до акаунту.
            </StyledTypography>

            <FormInput
              type="email"
              control={control}
              name="email"
              label="Пошта"
              errors={errors}
              defaultValue=""
            />

            {isPending ? (
              <Loader />
            ) : (
              <Button sx={{ fontWeight: 700 }} type="submit" onClick={() => {}}>
                Надіслати
              </Button>
            )}
          </StyledForgotPasswordForm>
        )}
      </StyledFrogotPasswordContainer>
    </StyledFrogotPasswordWrapper>
  );
};

export default ForgotPassword;
