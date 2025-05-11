import { TFiller } from "fabric";
import ColorPicker from "../../../../components/ColorPicker";
import { Box, Typography } from "@mui/material";
import {
  StyleDimensionTextField,
  StyleDimensionTextFieldBox,
} from "../RectSettings/styled";

interface Props {
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color: string | TFiller | null;
  strokeWidth: number | null;
  handleChangeStrokeWidth: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LineSettings = ({
  color,
  handleColorChange,
  strokeWidth,
  handleChangeStrokeWidth,
}: Props) => {
  return (
    <>
      <Box>
        <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
          Виміри
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <StyleDimensionTextFieldBox>
            <Typography sx={{ fontWeight: 700, color: "#D6B3FF" }}>
              В
            </Typography>
            <StyleDimensionTextField
              onChange={handleChangeStrokeWidth}
              value={strokeWidth}
              fullWidth
            />
            <Typography sx={{ color: "#5B3B81" }}>px</Typography>
          </StyleDimensionTextFieldBox>
        </Box>
      </Box>
      <ColorPicker
        label="Колір"
        htmlFor="lineColor"
        color={color}
        handleColorChange={handleColorChange}
      />
    </>
  );
};

export default LineSettings;
