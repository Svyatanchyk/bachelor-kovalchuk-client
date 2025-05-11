import { Stack, Typography } from "@mui/material";
import { TFiller } from "fabric";
import ColorPicker from "../../../../components/ColorPicker";
import {
  StyleDimensionTextField,
  StyleDimensionTextFieldBox,
} from "../RectSettings/styled";

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
      <Stack direction="column" spacing={2}>
        <ColorPicker
          htmlFor="strokeColor"
          handleColorChange={handleChangeStrokeFill}
          label="Обводка"
          color={strokeFill}
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

      <ColorPicker
        htmlFor="color"
        handleColorChange={handleColorChange}
        label="Колір"
        color={color}
      />
    </>
  );
};

export default ArrowSettings;
