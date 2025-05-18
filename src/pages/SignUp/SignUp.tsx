import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./validation";
import Loader from "../../components/Loader";
import { IFormFields } from "../../services/signupService";
import { useSignUp } from "../../hooks/useSignUp";
import FormInput from "../../components/FormInput";
import googleIcon from "/images/signin/google.svg";

import {
  StyledButton,
  StyledGoogleButton,
  StyledLine,
  StyledOrBox,
  StyledSignInLink,
  StyledSignUpContainer,
  StyledSignUpForm,
  StyledSignUpTypography,
  StyledSignUpWrapper,
} from "./styled";
import GoogleButton from "../../components/GoogleButton";

const SignUp = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormFields>({ resolver: yupResolver(signUpSchema) });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { isPending, mutate } = useSignUp(
    () => {
      setSuccessMessage("Перевірте свою пошту та підтвердіть свій акаунт");
      setErrorMessage(null);
      reset();
    },
    (error: any) => {
      console.error(
        "Error during sign up:",
        error.response?.data?.message || error.message
      );
      setSuccessMessage(null);
      setErrorMessage(error.response?.data?.message || error.message);
    }
  );

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    mutate(data);
  };

  return (
    <StyledSignUpWrapper>
      <StyledSignUpContainer>
        <StyledSignUpTypography>Реєстрація</StyledSignUpTypography>

        <StyledGoogleButton>
          <GoogleButton />

          <img src={googleIcon} alt="google icon" />
          <Typography
            sx={{
              color: "#D6B3FF",
              fontSize: {
                sm: "1.375rem",
              },
            }}
          >
            Google
          </Typography>
        </StyledGoogleButton>

        <Box sx={{ position: "relative" }}>
          <StyledOrBox>Або</StyledOrBox>
          <StyledLine />
        </Box>

        {successMessage && (
          <Alert sx={{ mt: 2 }} severity="success">
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert sx={{ mt: 2 }} severity="error">
            {errorMessage}
          </Alert>
        )}

        <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormInput
              type="email"
              defaultValue=""
              name="email"
              label="Пошта"
              control={control}
              errors={errors}
            />

            <FormInput
              type="password"
              defaultValue=""
              name="password"
              label="Пароль"
              control={control}
              errors={errors}
            />

            <FormInput
              type="password"
              defaultValue=""
              name="confirmPassword"
              label="Підтвердіть пароль"
              control={control}
              errors={errors}
            />
          </Box>

          {isPending ? (
            <Loader />
          ) : (
            <StyledButton disabled={isPending} type="submit">
              Зареєструватися
            </StyledButton>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "common.white" }}>
              Вже маєте створений акаунт?
            </Typography>
            <StyledSignInLink to="/signin">Увійти</StyledSignInLink>
          </Box>
        </StyledSignUpForm>
      </StyledSignUpContainer>
    </StyledSignUpWrapper>
  );
};

export default SignUp;
