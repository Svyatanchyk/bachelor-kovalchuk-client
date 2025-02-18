import { TextField } from "@mui/material";
import { TFiller } from "fabric";
import { ChangeEvent } from "react";

interface Props {
  width: number | string | null;
  height: number | string | null;
  cornerRadius: number | string | null;
  color: string | TFiller | null;
  handleWidthChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleHeightChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCornerRadius: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RectSetting = (props: Props) => {
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

export default RectSetting;
