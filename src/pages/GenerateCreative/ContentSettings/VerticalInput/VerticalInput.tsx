import { FormControl, InputLabel, Stack } from "@mui/material";
import { StyledTextField } from "./styled";
import { ChangeEvent } from "react";

interface FormInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const VerticalInput = ({ value, onChange }: FormInputProps) => {
  return (
    <FormControl fullWidth>
      <Stack direction="column" spacing={3} alignItems="flex-start">
        <InputLabel
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
          Вертикаль
        </InputLabel>
        <StyledTextField
          autoComplete="off"
          value={value}
          onChange={onChange}
          placeholder="Впишіть вертикаль"
          fullWidth
          type="text"
        />
      </Stack>
    </FormControl>
  );
};

export default VerticalInput;
