import { FormControl, InputLabel, Stack } from "@mui/material";
import { StyledTextField } from "./styled";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  handleChange: Dispatch<SetStateAction<number | number[]>>;
  label?: string;
  htmlFor?: string;
  value?: number | number[];
}

const Input = ({ handleChange, label, htmlFor, value }: Props) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (Number(value) < 500 && value.length >= 3) {
      handleChange(500);
      return;
    }

    handleChange(Number(value));
  };

  const handleBlur = () => {
    if (Number(value) < 500) {
      handleChange(500);
    }
  };

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
          onChange={handleChangeInput}
          type="number"
          value={value}
          id={htmlFor}
          fullWidth
          onBlur={handleBlur}
        />
      </Stack>
    </FormControl>
  );
};

export default Input;
