import { FormControl, InputLabel, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { StyledTextField } from "./styled";

type InputType = "email" | "password" | "text";

interface FormInputProps {
  name: string;
  label: string;
  control: any;
  errors: any;
  defaultValue?: string;
  type: InputType;
  placeholder?: string;
}

const FormInput = ({
  name,
  label,
  control,
  errors,
  defaultValue = "",
  type,
  placeholder,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth>
          <Stack direction="column" spacing={3} alignItems="flex-start">
            <InputLabel
              htmlFor={name}
              sx={{
                color: "#D6B3FF",
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                },
                position: "relative",
                left: -10,
              }}
            >
              {label}
            </InputLabel>
            <StyledTextField
              {...field}
              placeholder={placeholder}
              fullWidth
              id={name}
              error={!!errors[name]}
              helperText={errors?.[name]?.message}
              type={type}
            />
          </Stack>
        </FormControl>
      )}
    />
  );
};

export default FormInput;
