import { ChangeEvent, useRef } from "react";
import { Box, Typography, InputLabel, TextField } from "@mui/material";
import { StyleColorPickerWrapper } from "./styled";
import { TFiller } from "fabric";

interface Props {
  label: string;
  color: string | TFiller | null;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ColorPicker = ({ label, color, handleColorChange }: Props) => {
  return (
    <Box>
      <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
        {label}
      </Typography>

      <TextField
        id="colorPicker"
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{
          display: "none",
        }}
      />

      <InputLabel htmlFor="colorPicker">
        <StyleColorPickerWrapper>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              backgroundColor: color?.toString(),
            }}
          ></Box>

          <Box sx={{ color: "#5B3B81", fontWeight: "600" }}>
            {color?.toString()}
          </Box>
        </StyleColorPickerWrapper>
      </InputLabel>
    </Box>
  );
};

export default ColorPicker;
