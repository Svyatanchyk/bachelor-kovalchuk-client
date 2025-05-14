import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Alert } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "./validation";
import Loader from "../../components/Loader";
import FormInput from "../../components/FormInput";
import {
  confirmResetPassword,
  IFormFields,
  IResetPasswordResponse,
} from "../../services/confirmResetPassword";
import {
  StyledContainer,
  StyledForm,
  StyledTypography,
  StyledWrapper,
} from "./styled";
import Button from "../../components/Buttons/Button";

const ConfirmResetPassword = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { userId, resetString } = useParams<{
    userId: string;
    resetString: string;
  }>();

  const { mutate, isPending } = useMutation({
    mutationFn: (password: string) => {
      if (!userId || !resetString) {
        throw new Error("Invalid verification parameters.");
      }
      return confirmResetPassword(password, resetString, userId);
    },
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
    mutate(data.password);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

        {!!successMessage || (
          <>
            <StyledTypography>Введіть новий пароль</StyledTypography>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                type="password"
                control={control}
                name="password"
                label="Новий пароль"
                errors={errors}
              />

              <FormInput
                type="password"
                control={control}
                name="confirmPassword"
                label="Повторіть пароль"
                errors={errors}
              />

              {isPending ? (
                <Loader />
              ) : (
                <Button type="submit">Надіслати</Button>
              )}
            </StyledForm>
          </>
        )}
      </StyledContainer>
    </StyledWrapper>
  );
};

export default ConfirmResetPassword;
