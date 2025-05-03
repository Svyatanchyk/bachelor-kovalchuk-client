import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FONT_SIZE_OPTIONS } from "../utils/fontSizeOptions";

import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { TextAlign } from "../TextAlign";
import { TextBoxSettingsProps } from "./types";
import {
  StyleDimensionTextField,
  StyleDimensionTextFieldBox,
} from "../RectSettings/styled";
import ColorPicker from "../../../../components/ColorPicker";

const TextBoxSettings = (props: TextBoxSettingsProps) => {
  const {
    width,
    height,
    fontSize,
    fontFamilies,
    fontFamily,
    fontWeight,
    underline,
    italic,
    color,
    textAlign,
    isUppercase,
    strokeFill,
    strokeWidth,
    handleChangeStrokeFill,
    handleChangeStrokeWidth,
    handleChangeItalic,
    handleChangeTextAlign,
    handleChangeUnderline,
    handleColorChange,
    handleFontFamilyChange,
    handleFontSizeChange,
    handleFontWeightChange,
    handleHeightChange,
    handleWidthChange,
    handleChangeUppercase,
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
      </Box>

      <Autocomplete
        onChange={handleFontSizeChange}
        value={fontSize}
        disablePortal
        sx={{ width: "250px" }}
        options={FONT_SIZE_OPTIONS}
        renderInput={(params) => <TextField {...params} label="Font Size" />}
      />

      <Autocomplete
        onChange={handleFontFamilyChange}
        value={fontFamily}
        disablePortal
        sx={{ width: "250px" }}
        options={fontFamilies}
        renderInput={(params) => <TextField {...params} label="Font Family" />}
      />

      <Autocomplete
        onChange={handleFontWeightChange}
        value={fontWeight}
        disablePortal
        sx={{ width: "250px" }}
        options={["Normal", "Bold"]}
        renderInput={(params) => <TextField {...params} label="Font Weight" />}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ColorPicker
          label="Обводка"
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
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          onClick={handleChangeUnderline}
          sx={{
            backgroundColor: underline ? "grey.300" : "transparent",
          }}
        >
          <FormatUnderlinedIcon />
        </IconButton>

        <IconButton onClick={handleChangeItalic}>
          <FormatItalicIcon
            sx={{
              backgroundColor: italic ? "grey.300" : "transparent",
            }}
          />
        </IconButton>
        <IconButton onClick={handleChangeUppercase}>
          <TextFieldsIcon
            sx={{
              backgroundColor: isUppercase ? "grey.300" : "transparent",
            }}
          />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton onClick={() => handleChangeTextAlign(TextAlign.Left)}>
          <FormatAlignLeftIcon
            sx={{
              backgroundColor:
                textAlign === TextAlign.Left ? "grey.300" : "transparent",
            }}
          />
        </IconButton>
        <IconButton onClick={() => handleChangeTextAlign(TextAlign.Center)}>
          <FormatAlignCenterIcon
            sx={{
              backgroundColor:
                textAlign === TextAlign.Center ? "grey.300" : "transparent",
            }}
          />
        </IconButton>
        <IconButton onClick={() => handleChangeTextAlign(TextAlign.Right)}>
          <FormatAlignRightIcon
            sx={{
              backgroundColor:
                textAlign === TextAlign.Right ? "grey.300" : "transparent",
            }}
          />
        </IconButton>
      </Box>

      <ColorPicker
        handleColorChange={handleColorChange}
        label="Колір"
        color={color}
      />
    </>
  );
};

export default TextBoxSettings;
