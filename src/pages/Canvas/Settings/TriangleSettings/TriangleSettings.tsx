import { TFiller } from "fabric";
import ColorPicker from "../../../../components/ColorPicker";
import {
  StyleDimensionTextField,
  StyleDimensionTextFieldBox,
} from "../RectSettings/styled";
import { Stack, Typography } from "@mui/material";

interface Props {
  color: string | TFiller | null;
  strokeWidth: number | null;
  strokeFill: string | TFiller | null;
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeStrokeWidth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeStrokeFill: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TriangleSettings = ({
  handleChangeStrokeWidth,
  color,
  strokeWidth,
  handleColorChange,
  strokeFill,
  handleChangeStrokeFill,
}: Props) => {
  return (
    <Stack direction="column" spacing={2}>
      <ColorPicker
        label="Колір"
        htmlFor="color"
        color={color}
        handleColorChange={handleColorChange}
      />

      <ColorPicker
        label="Колір обводки"
        htmlFor="strokeFill"
        color={strokeFill}
        handleColorChange={handleChangeStrokeFill}
      />
      <StyleDimensionTextFieldBox>
        <StyleDimensionTextField
          onChange={handleChangeStrokeWidth}
          value={strokeWidth}
          fullWidth
        />
        <Typography sx={{ color: "#5B3B81" }}>px</Typography>
      </StyleDimensionTextFieldBox>
    </Stack>
  );
};

export default TriangleSettings;
