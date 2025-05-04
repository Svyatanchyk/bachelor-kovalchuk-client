import { Box, FormControl, IconButton, InputLabel, Stack } from "@mui/material";
import { Controller } from "react-hook-form";
import { StyledIconButton, StyledTextField } from "./styled";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

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
  placeholder,
  type,
}: FormInputProps) => {
  const [inputType, setInputType] = useState<InputType>("password");

  const handleChangeInputType = (type: InputType) => {
    setInputType(type);
  };

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
            <Box
              sx={{
                width: "100%",
                position: "relative",
              }}
            >
              <StyledTextField
                {...field}
                placeholder={placeholder}
                autoComplete="off"
                fullWidth
                id={name}
                error={!!errors[name]}
                helperText={errors?.[name]?.message}
                type={type === "email" ? type : inputType}
              />

              {type === "password" &&
                (inputType === "password" ? (
                  <StyledIconButton
                    onClick={() => handleChangeInputType("text")}
                  >
                    <VisibilityIcon sx={{ color: "#8F3FFF4D" }} />
                  </StyledIconButton>
                ) : (
                  <StyledIconButton
                    onClick={() => handleChangeInputType("password")}
                  >
                    <VisibilityOffIcon sx={{ color: "#8F3FFF4D" }} />
                  </StyledIconButton>
                ))}
            </Box>
          </Stack>
        </FormControl>
      )}
    />
  );
};

export default FormInput;
