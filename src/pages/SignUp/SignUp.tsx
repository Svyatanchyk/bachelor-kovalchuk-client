import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  StyledSignUpContainer,
  StyledSignUpForm,
  StyledSignUpTypography,
  StyledSignUpWrapper,
} from "./styled";
import { Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./validation";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface IFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

interface ISignUpResponse {
  status: string;
  message: string;
}

const signUpRequest = async (data: IFormFields): Promise<ISignUpResponse> => {
  const response = await axios.post("http://localhost:3000/user/signup", data);
  return response.data;
};

const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>({ resolver: yupResolver(signUpSchema) });

  const mutation = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data: ISignUpResponse) => {
      console.log("Sign up successful:", data);
    },
    onError: (error: any) => {
      console.error(
        "Error during sign in:",
        error.response?.data?.message || error.message
      );
    },
  });

  const onSubmit: SubmitHandler<IFormFields> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <StyledSignUpWrapper>
      <StyledSignUpContainer>
        <StyledSignUpTypography>Sign up</StyledSignUpTypography>

        <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                error={!!errors.email}
                helperText={errors?.email?.message}
                fullWidth
                label="Email"
                {...field}
              />
            )}
          />

          <Controller
            defaultValue=""
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                error={!!errors.password}
                helperText={errors?.password?.message}
                fullWidth
                label="Password"
                {...field}
              />
            )}
          />
          <Controller
            defaultValue=""
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                fullWidth
                label="Confirm Password"
                {...field}
              />
            )}
          />

          <Button variant="contained" type="submit">
            Sign up
          </Button>
        </StyledSignUpForm>
      </StyledSignUpContainer>
    </StyledSignUpWrapper>
  );
};

export default SignUp;
