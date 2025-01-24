import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  StyledSignInContainer,
  StyledSignInForm,
  StyledSignInTypography,
  StyledSignInWrapper,
} from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./validation";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface IFormFields {
  email: string;
  password: string;
}

interface ISignInResponse {
  status: string;
  message: string;
  data?: {
    userId: string;
  };
}

const signInRequest = async (data: IFormFields): Promise<ISignInResponse> => {
  const response = await axios.post("http://localhost:3000/user/signin", data);
  return response.data;
};

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormFields>({
    resolver: yupResolver(signInSchema),
  });

  const mutation = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data: ISignInResponse) => {
      console.log("Sign in successful:", data);
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
    <StyledSignInWrapper>
      <StyledSignInContainer>
        <StyledSignInTypography>Sign in</StyledSignInTypography>
        <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
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
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </StyledSignInForm>
      </StyledSignInContainer>
    </StyledSignInWrapper>
  );
};

export default SignIn;
