import { TextField } from "@mui/material";
import { CircleSettingsProps } from "./types";

const CircleSettings = (props: CircleSettingsProps) => {
  const { diameter, color, handleDiameterChange, handleColorChange } = props;
  return (
    <>
      <TextField
        onChange={handleDiameterChange}
        label="Diameter"
        value={diameter}
        fullWidth
      />

      <TextField
        type="color"
        onChange={handleColorChange}
        label="Color"
        value={color}
        fullWidth
      />
    </>
  );
};

export default CircleSettings;
