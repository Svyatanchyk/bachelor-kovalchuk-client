import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Alert, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./validation";
import Loader from "../../components/Loader";
import { IFormFields, ISignUpResponse } from "../../services/signupService";
import { useSignUp } from "../../hooks/useSignUp";
import FormInput from "../../components/FormInput";
import {
  StyledSignInLink,
  StyledSignInTypography,
  StyledSignUpContainer,
  StyledSignUpForm,
  StyledSignUpTypography,
  StyledSignUpWrapper,
} from "./styled";

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
    (data: ISignUpResponse) => {
      // Remove in production
      console.log("Sign up successful:", data);
      setSuccessMessage(data.message);
      setErrorMessage(null);
      reset();
    },
    (error: any) => {
      // Remove in production
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
    <StyledSignUpWrapper>
      <StyledSignUpContainer>
        <StyledSignUpTypography>Sign up</StyledSignUpTypography>

        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            defaultValue=""
            name="email"
            label="Email"
            control={control}
            errors={errors}
          />

          <FormInput
            defaultValue=""
            name="password"
            label="Password"
            control={control}
            errors={errors}
          />

          <FormInput
            defaultValue=""
            name="confirmPassword"
            label="Confirm Password"
            control={control}
            errors={errors}
          />

          {isPending ? (
            <Loader />
          ) : (
            <Button disabled={isPending} variant="contained" type="submit">
              Sign up
            </Button>
          )}

          <StyledSignInTypography>
            Already have an account?
            <StyledSignInLink to="/signin">Sign in</StyledSignInLink>
          </StyledSignInTypography>
        </StyledSignUpForm>
      </StyledSignUpContainer>
    </StyledSignUpWrapper>
  );
};

export default SignUp;
