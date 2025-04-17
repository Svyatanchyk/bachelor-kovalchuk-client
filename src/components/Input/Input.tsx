import { FormControl, InputLabel, Stack } from "@mui/material";
import { StyledTextField } from "./styled"; // Assuming StyledTextField is your custom styled MUI TextField

interface Props {
  label: string;
  htmlFor: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  type: "text" | "password" | "email";
}

const Input = ({
  label,
  htmlFor,
  placeholder,
  type,
  multiline = false,
  rows = 1,
}: Props) => {
  return (
    <FormControl fullWidth>
      <Stack direction="column" spacing={3} alignItems="flex-start">
        <InputLabel
          htmlFor={htmlFor}
          sx={{
            color: "#D6B3FF",
            fontSize: {
              xs: "1rem",
              sm: "1.25rem",
            },
            position: "relative",
            left: -10,
          }}
        >
          {label}
        </InputLabel>
        <StyledTextField
          type={type}
          multiline={multiline}
          rows={rows}
          id={htmlFor}
          fullWidth
          placeholder={placeholder}
        />
      </Stack>
    </FormControl>
  );
};

export default Input;
