import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  label: string;
  color: string | null;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const ColorSelector = ({ label, color, handleColorChange }: Props) => {
  return (
    <TextField
      sx={{ width: 250 }}
      type="color"
      onChange={handleColorChange}
      label={label}
      value={color}
      fullWidth
    />
  );
};

export default ColorSelector;
