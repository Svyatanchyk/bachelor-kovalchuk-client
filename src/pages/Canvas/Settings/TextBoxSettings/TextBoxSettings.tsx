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

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ color: "#d6b3ff", textAlign: "left", mb: 1 }}>
          Типографіка
        </Typography>

        <Autocomplete
          onChange={handleFontSizeChange}
          value={fontSize}
          disablePortal
          sx={{
            "& .MuiAutocomplete-inputRoot": {
              borderRadius: "24px",
              paddingRight: "30px",
              background: "transparent",
              border: "1px solid transparent",
              backgroundImage: `
                linear-gradient(#0f021c, #0f021c), 
                linear-gradient(to right,rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            },
            "& .MuiAutocomplete-popupIndicator svg": {
              color: "#d6b3ff",
              fontSize: "2.5rem",
            },

            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              color: "#5B3B81",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
            "& .MuiAutocomplete-clearIndicator": {
              display: "none",
            },
          }}
          options={FONT_SIZE_OPTIONS}
          renderInput={(params) => <TextField {...params} />}
        />

        <Autocomplete
          onChange={handleFontFamilyChange}
          value={fontFamily}
          disablePortal
          sx={{
            "& .MuiAutocomplete-inputRoot": {
              borderRadius: "24px",
              paddingRight: "30px",
              background: "transparent",
              border: "1px solid transparent",
              backgroundImage: `
                linear-gradient(#0f021c, #0f021c), 
                linear-gradient(to right,rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            },
            "& .MuiAutocomplete-popupIndicator svg": {
              color: "#d6b3ff",
              fontSize: "2.5rem",
            },

            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              color: "#5B3B81",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
            "& .MuiAutocomplete-clearIndicator": {
              display: "none",
            },
          }}
          options={fontFamilies}
          renderInput={(params) => <TextField {...params} />}
        />

        <Autocomplete
          onChange={handleFontWeightChange}
          value={fontWeight}
          disablePortal
          sx={{
            "& .MuiAutocomplete-inputRoot": {
              borderRadius: "24px",
              paddingRight: "30px",
              background: "transparent",
              border: "1px solid transparent",
              backgroundImage: `
                linear-gradient(#0f021c, #0f021c), 
                linear-gradient(to right,rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            },
            "& .MuiAutocomplete-popupIndicator svg": {
              color: "#d6b3ff",
              fontSize: "2.5rem",
            },

            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              color: "#5B3B81",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
            "& .MuiAutocomplete-clearIndicator": {
              display: "none",
            },
          }}
          options={["Normal", "Bold"]}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
        <ColorPicker
          htmlFor="strokeFill"
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

      <Typography sx={{ color: "#d6b3ff", textAlign: "left", mb: 1, mt: 2 }}>
        Стилі тексту
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <IconButton
          onClick={handleChangeUnderline}
          sx={{
            backgroundColor: underline ? "#d6b3ff" : "#5B3B81",
            width: 40,
            height: 40,
            padding: 0,
            "&:hover": {
              backgroundColor: underline ? "#d6b3ff" : "#5B3B81",
            },
          }}
        >
          <FormatUnderlinedIcon sx={{ fontSize: 24 }} />
        </IconButton>

        <IconButton
          onClick={handleChangeItalic}
          sx={{
            backgroundColor: italic ? "#d6b3ff" : "#5B3B81",
            width: 40,
            height: 40,
            padding: 0,
            "&:hover": {
              backgroundColor: italic ? "#d6b3ff" : "#5B3B81",
            },
          }}
        >
          <FormatItalicIcon sx={{ fontSize: 24 }} />
        </IconButton>

        <IconButton
          onClick={handleChangeUppercase}
          sx={{
            backgroundColor: isUppercase ? "#d6b3ff" : "#5B3B81",
            width: 40,
            height: 40,
            padding: 0,
            "&:hover": {
              backgroundColor: isUppercase ? "#d6b3ff" : "#5B3B81",
            },
          }}
        >
          <TextFieldsIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Box>

      <Typography sx={{ color: "#d6b3ff", textAlign: "left", mb: 1, mt: 2 }}>
        Вирівнювання
      </Typography>

      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <IconButton
          onClick={() => handleChangeTextAlign(TextAlign.Left)}
          sx={{
            backgroundColor:
              textAlign === TextAlign.Left ? "#d6b3ff" : "#5B3B81",
            width: 40,
            height: 40,
            padding: 0,
            "&:hover": {
              backgroundColor:
                textAlign === TextAlign.Left ? "#d6b3ff" : "#5B3B81",
            },
          }}
        >
          <FormatAlignLeftIcon sx={{ fontSize: 24 }} />{" "}
        </IconButton>

        <IconButton
          onClick={() => handleChangeTextAlign(TextAlign.Center)}
          sx={{
            backgroundColor:
              textAlign === TextAlign.Center ? "#d6b3ff" : "#5B3B81",
            width: 40,
            height: 40,
            padding: 0,
            "&:hover": {
              backgroundColor:
                textAlign === TextAlign.Center ? "#d6b3ff" : "#5B3B81",
            },
          }}
        >
          <FormatAlignCenterIcon sx={{ fontSize: 24 }} />{" "}
        </IconButton>

        <IconButton
          onClick={() => handleChangeTextAlign(TextAlign.Right)}
          sx={{
            backgroundColor:
              textAlign === TextAlign.Right ? "#d6b3ff" : "#5B3B81",
            width: 40,
            height: 40,
            padding: 0,
            "&:hover": {
              backgroundColor:
                textAlign === TextAlign.Right ? "#d6b3ff" : "#5B3B81",
            },
          }}
        >
          <FormatAlignRightIcon sx={{ fontSize: 24 }} />{" "}
        </IconButton>
      </Box>

      <Box>
        {/* <TextField
          fullWidth
          type="color"
          onChange={handleColorChange}
          value={color}
        /> */}
        <ColorPicker
          htmlFor="color"
          handleColorChange={handleColorChange}
          label="Колір"
          color={color}
        />
      </Box>
    </>
  );
};

export default TextBoxSettings;
