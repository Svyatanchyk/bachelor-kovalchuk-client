import { TextField } from "@mui/material";
import { RectSettingsProps } from "./types";

const RectSettings = (props: RectSettingsProps) => {
  const {
    width,
    height,
    color,
    cornerRadius,
    handleChangeCornerRadius,
    handleColorChange,
    handleHeightChange,
    handleWidthChange,
  } = props;

  return (
    <>
      <TextField
        onChange={handleWidthChange}
        label="Width"
        value={width}
        fullWidth
      />
      <TextField
        onChange={handleHeightChange}
        label="Height"
        value={height}
        fullWidth
      />
      <TextField
        onChange={handleChangeCornerRadius}
        label="Corner radius"
        value={cornerRadius}
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

export default RectSettings;
