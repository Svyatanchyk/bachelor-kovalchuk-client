import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button } from "@mui/material";
import { signInSchema } from "./validation";
import FormInput from "../../components/FormInput";
import Loader from "../../components/Loader";
import { IFormFields, ISignInResponse } from "../../services/loginService";
import { useLogin } from "../../hooks/useLogin";
import {
  StyledForgotPasswordLink,
  StyledSignInContainer,
  StyledSignInForm,
  StyledSignInTypography,
  StyledSignInWrapper,
} from "./styled";
import { useState } from "react";

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

  const { mutate, isPending } = useLogin(
    (data: ISignInResponse) => {
      console.log("Sign in successful:", data);
      localStorage.setItem("accessToken", data.accessToken);
      setSuccessMessage(data.message);
      setErrorMessage(null);
      reset();
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
        <StyledSignInTypography>Sign in</StyledSignInTypography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="email"
            defaultValue=""
            name="email"
            label="Email"
            control={control}
            errors={errors}
          />

          <FormInput
            type="password"
            defaultValue=""
            name="password"
            label="Password"
            control={control}
            errors={errors}
          />

          {isPending ? (
            <Loader />
          ) : (
            <Button variant="contained" type="submit">
              Sign In
            </Button>
          )}
          <StyledForgotPasswordLink to="/forgot-password">
            Forgot password?
          </StyledForgotPasswordLink>
        </StyledSignInForm>
      </StyledSignInContainer>
    </StyledSignInWrapper>
  );
};

export default SignIn;
