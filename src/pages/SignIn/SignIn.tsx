import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Typography } from "@mui/material";
import { signInSchema } from "./validation";
import FormInput from "../../components/FormInput";
import Loader from "../../components/Loader";
import { IFormFields, ISignInResponse } from "../../services/loginService";
import { useLogin } from "../../hooks/useLogin";
import {
  StyledButton,
  StyledForgotPasswordLink,
  StyledGoogleButton,
  StyledLine,
  StyledOrBox,
  StyledSignInContainer,
  StyledSignInForm,
  StyledSignInTypography,
  StyledSignInWrapper,
} from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import googleIcon from "/images/signin/google.svg";
import { useUser } from "../../context/UserContext";
import GoogleButton from "../../components/GoogleButton";

const SignIn = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver(signInSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setUserData } = useUser();

  const navigate = useNavigate();

  const { mutate, isPending } = useLogin(
    (data: ISignInResponse) => {
      console.log("Sign in successful:", data);
      setUserData({
        userId: data.user?.userId,
        email: data.user?.userEmail,
        tokenBalance: Number(data.user?.tokenBalance) || 0,
        nickname: data.user?.nickname,
        provider: data.user.provider,
      });
      localStorage.setItem("accessToken", data.accessToken);
      setSuccessMessage(data.message);
      setErrorMessage(null);
      reset();
      navigate("/main");
    },
    (error: any) => {
      console.error(
        "Error during sign in:",
        error.response?.data?.message || error.message
      );
      setSuccessMessage(null);
      setErrorMessage(error.response?.data?.message || error.message);
    }
  );

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <StyledSignInWrapper>
      <StyledSignInContainer>
        <StyledSignInTypography>Увійти</StyledSignInTypography>

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
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
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

          {isPending ? (
            <Loader />
          ) : (
            <StyledButton type="submit">Увійти</StyledButton>
          )}
          <StyledForgotPasswordLink to="/forgot-password">
            Забули пароль?
          </StyledForgotPasswordLink>
        </StyledSignInForm>
      </StyledSignInContainer>
    </StyledSignInWrapper>
  );
};

export default SignIn;
