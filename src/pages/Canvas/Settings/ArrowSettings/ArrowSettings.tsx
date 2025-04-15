import { TextField } from "@mui/material";
import { TFiller } from "fabric";

interface Props {
  handleChangeStrokeFill: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeStrokeWidth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color: string | TFiller | null;
  strokeFill: string | TFiller | null;
  strokeWidth: number | null;
}
const ArrowSettings = ({
  handleChangeStrokeFill,
  handleChangeStrokeWidth,
  handleColorChange,
  color,
  strokeFill,
  strokeWidth,
}: Props) => {
  return (
    <>
      <TextField
        onChange={handleChangeStrokeWidth}
        label="Stroke width"
        value={strokeWidth}
        fullWidth
      />

      <TextField
        type="color"
        onChange={handleChangeStrokeFill}
        label="Stroke fill"
        value={strokeFill}
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

export default ArrowSettings;
