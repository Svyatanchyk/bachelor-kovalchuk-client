import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

type InputType = "email" | "password" | "text";

interface FormInputProps {
  name: string;
  label: string;
  control: any;
  errors: any;
  defaultValue?: string;
  type: InputType;
}

const FormInput = ({
  name,
  label,
  control,
  errors,
  defaultValue = "",
  type,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          error={!!errors[name]}
          helperText={errors?.[name]?.message}
          type={type}
        />
      )}
    />
  );
};

export default FormInput;
