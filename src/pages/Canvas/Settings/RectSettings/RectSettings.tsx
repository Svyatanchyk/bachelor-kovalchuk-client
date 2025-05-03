import { Box, Typography } from "@mui/material";
import { RectSettingsProps } from "./types";
import { StyleDimensionTextField, StyleDimensionTextFieldBox } from "./styled";
import ColorPicker from "../../../../components/ColorPicker";

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
      <Box>
        <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
          Виміри
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <StyleDimensionTextFieldBox>
            <Typography sx={{ fontWeight: 700, color: "#D6B3FF" }}>
              Ш
            </Typography>
            <StyleDimensionTextField
              onChange={handleWidthChange}
              value={width}
              fullWidth
            />
            <Typography sx={{ color: "#5B3B81" }}>px</Typography>
          </StyleDimensionTextFieldBox>

          <StyleDimensionTextFieldBox>
            <Typography sx={{ fontWeight: 700, color: "#D6B3FF" }}>
              В
            </Typography>
            <StyleDimensionTextField
              onChange={handleHeightChange}
              value={height}
              fullWidth
            />
            <Typography sx={{ color: "#5B3B81" }}>px</Typography>
          </StyleDimensionTextFieldBox>
        </Box>

        <Typography sx={{ color: "#D6B3FF", textAlign: "left", mb: 1 }}>
          Заокгруглення
        </Typography>
        <StyleDimensionTextFieldBox>
          <StyleDimensionTextField
            onChange={handleChangeCornerRadius}
            value={cornerRadius}
            fullWidth
          />
          <Typography sx={{ color: "#5B3B81" }}>px</Typography>
        </StyleDimensionTextFieldBox>
      </Box>

      <ColorPicker
        handleColorChange={handleColorChange}
        label="Колір"
        color={color}
      />
    </>
  );
};

export default RectSettings;
