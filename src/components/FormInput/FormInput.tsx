import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  control: any;
  errors: any;
  defaultValue?: string;
}

const FormInput = ({
  name,
  label,
  control,
  errors,
  defaultValue = "",
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
        />
      )}
    />
  );
};

export default FormInput;
