import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import { Alert, Box, Button } from "@mui/material";
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
      console.log(
        "Reset password link has been sent Successfully:",
        data.message
      );
      console.log(data);

      setSuccessMessage(data.message);
      setErrorMessage(null);
    },
    onError: (error: any) => {
      console.error("Failed sending request password link", error);
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
            <StyledTypography>Can not sign in?</StyledTypography>
            <StyledTypography sx={{ fontSize: "1rem" }}>
              Enter your email and we will send the link to restore access to
              your account.
            </StyledTypography>

            <FormInput
              type="email"
              control={control}
              name="email"
              label="Email"
              errors={errors}
              defaultValue=""
            />

            {isPending ? (
              <Loader />
            ) : (
              <Button
                type="submit"
                sx={{ fontWeight: 700 }}
                variant="contained"
              >
                Submit
              </Button>
            )}
          </StyledForgotPasswordForm>
        )}
      </StyledFrogotPasswordContainer>
    </StyledFrogotPasswordWrapper>
  );
};

export default ForgotPassword;
