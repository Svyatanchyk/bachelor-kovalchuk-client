import { FormControl, InputLabel, Stack } from "@mui/material";
import { StyledTextField } from "./styled";
import { ChangeEvent } from "react";

interface Props {
  label?: string;
  htmlFor?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type: "text" | "password" | "email";
  value?: string;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  htmlFor,
  placeholder,
  type,
  value,
  multiline = false,
  disabled,
  handleChange,
  rows = 1,
}: Props) => {
  return (
    <FormControl fullWidth>
      <Stack direction="column" spacing={3} alignItems="flex-start">
        {label && (
          <InputLabel
            htmlFor={htmlFor}
            sx={{
              color: "#D6B3FF",
              fontSize: {
                xs: "0.875rem",
                sm: "0.975rem",
              },
              position: "relative",
              left: -10,
            }}
          >
            {label}
          </InputLabel>
        )}

        <StyledTextField
          value={value}
          onChange={handleChange}
          type={type}
          multiline={multiline}
          rows={rows}
          id={htmlFor}
          fullWidth
          disabled={disabled}
          placeholder={placeholder}
        />
      </Stack>
    </FormControl>
  );
};

export default Input;
