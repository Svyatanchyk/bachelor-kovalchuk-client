import { Canvas, Circle, FabricObject, Rect, Textbox, TFiller } from "fabric";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { StyledCanvasSettings } from "./styled";
import { Autocomplete, Box, IconButton, TextField } from "@mui/material";
import { FONT_SIZE_OPTIONS } from "./utils/fontSizeOptions";
import {
  fetchGooleFonts,
  loadGoogleFont,
} from "../../../utils/googleFontsUtils";

import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import { TextAlign } from "./TextAlign";
import RectSetting from "./RectSettings";

interface SettingsProps {
  canvas: Canvas | null;
}
const Settings = ({ canvas }: SettingsProps) => {
  const [selectedObject, setSelectedObject] = useState<FabricObject | null>(
    null
  );
  const [cornerRadius, setCornerRadius] = useState<number | string | null>(
    null
  );
  const [width, setWidth] = useState<number | string | null>(null);
  const [height, setHeight] = useState<number | string | null>(null);
  const [diameter, setDiameter] = useState<number | string | null>(null);
  const [color, setColor] = useState<string | TFiller | null>(null);
  const [canvasBg, setCanvasBg] = useState<string | TFiller | null>(null);
  const [fontSize, setFontSize] = useState<{
    id: number;
    label: string;
    fontSize: number;
  } | null>(null);
  const [fontFamilies, setFontFamilies] = useState<string[]>([]);
  const [fontFamily, setFontFamily] = useState<string>();
  const [fontWeight, setFontWeight] = useState<string>();
  const [underline, setUnderline] = useState<boolean>();
  const [italic, setItalic] = useState<boolean>();
  const [textAlign, setTextAlign] = useState<TextAlign | null>(null);

  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (event) => {
        handleObjectSelection(event.selected?.[0] || null);
      });

      canvas.on("selection:updated", (event) => {
        handleObjectSelection(event.selected?.[0] || null);
      });

      canvas.on("selection:cleared", () => {
        handleObjectSelection(null);
        clearSettings();
      });

      canvas.on("object:modified", (event) => {
        handleObjectSelection(event.target || null);
      });

      canvas.on("object:scaling", (event) => {
        handleObjectSelection(event.target || null);
      });
    }
  }, [canvas]);

  useEffect(() => {
    const fetchFonts = async () => {
      const fonts = await fetchGooleFonts();
      setFontFamilies(fonts);
    };

    fetchFonts();
  }, []);

  const handleObjectSelection = (object: FabricObject | null) => {
    if (!object) {
      setSelectedObject(null);
      return;
    }

    setSelectedObject(object);

    if (object instanceof Rect) {
      setWidth(Math.round((object.width ?? 0) * (object.scaleX ?? 1)));
      setHeight(Math.round((object.height ?? 0) * (object.scaleY ?? 1)));
      setColor(object.fill);
      setCornerRadius(object.rx);
      setDiameter("");
    }

    if (object instanceof Circle) {
      setColor(object.fill);
      setDiameter(Math.round((object.radius ?? 0) * 2 * (object.scaleX ?? 1)));
      setWidth("");
      setHeight("");
    }

    if (object instanceof Textbox) {
      const fontSize = object.fontSize;
      const currentObject = FONT_SIZE_OPTIONS.find(
        (item) => item.fontSize === fontSize
      );
      setWidth(Math.round((object.width ?? 0) * (object.scaleX ?? 1)));
      setHeight(Math.round((object.height ?? 0) * (object.scaleY ?? 1)));
      setColor(object.fill);
      setFontSize(currentObject!);
      setFontFamily(object.fontFamily);
      setItalic(object.fontStyle === "normal" ? false : true);
      setFontWeight(object.fontWeight as string);
      setDiameter("");
      setUnderline(object.underline);
      if (["center", "left", "right"].includes(object.textAlign)) {
        setTextAlign(object.textAlign as TextAlign);
      }
    }
  };

  const clearSettings = () => {
    setColor("");
    setDiameter("");
    setWidth("");
    setHeight("");
  };

  const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    if (value === "" || isNaN(initValue) || initValue < 0) {
      setWidth("");
      return;
    }

    setWidth(initValue);

    if (
      selectedObject &&
      (selectedObject.type === "rect" ||
        (selectedObject.type === "textbox" && initValue >= 0))
    ) {
      selectedObject.set({ width: initValue * selectedObject.scaleX });
      selectedObject.setCoords();
      canvas?.renderAll();
    }
  };

  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    if (value === "" || isNaN(initValue) || initValue < 0) {
      setHeight("");
      return;
    }

    setHeight(initValue);

    if (
      selectedObject &&
      (selectedObject.type === "rect" ||
        (selectedObject.type === "textbox" && initValue >= 0))
    ) {
      selectedObject.set({ height: initValue * selectedObject.scaleY });
      selectedObject.setCoords();
      canvas?.renderAll();
    }
  };

  const handleDiameterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    if (value === "" || isNaN(initValue) || initValue < 0) {
      setDiameter("");
      return;
    }

    setDiameter(initValue);

    if (selectedObject && selectedObject.type === "circle") {
      selectedObject.set({
        radius: initValue / 2,
      });
      selectedObject.setCoords();

      canvas?.renderAll();
    }
  };

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setColor(value);

    if (selectedObject) {
      selectedObject.set({ fill: value });
      canvas?.renderAll();
    }
  };

  const handleChangeCanvasBg = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!canvas) return;
    canvas.backgroundColor = value;
    canvas.renderAll();
    setCanvasBg(value);
  };

  const handleFontSizeChange = (
    _: SyntheticEvent,
    newValue: { id: number; fontSize: number; label: string } | null
  ) => {
    if (!newValue) return;
    setFontSize(newValue);

    if (selectedObject && selectedObject.type === "textbox") {
      selectedObject.set({ fontSize: newValue.fontSize });
      selectedObject.setCoords();
      canvas?.renderAll();
    }
  };

  const handleFontWeightChange = (
    _: SyntheticEvent,
    newValue: string | null
  ) => {
    if (!newValue) return;

    if (selectedObject && selectedObject.type === "textbox") {
      selectedObject.set({ fontWeight: newValue });
      setFontWeight(newValue);
      canvas?.renderAll();
    }
  };

  const handleChangeCornerRadius = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    if (value === "" || isNaN(initValue) || initValue < 0) {
      setCornerRadius("");
      return;
    }

    setCornerRadius(initValue);

    if (selectedObject && selectedObject.type === "rect") {
      selectedObject.set({ rx: initValue, ry: initValue });
      selectedObject.setCoords();
      canvas?.renderAll();
    }
  };

  const handleChangeUnderline = () => {
    if (selectedObject && selectedObject.type === "textbox") {
      selectedObject.set({ underline: !underline });
      setUnderline((prev) => !prev);
      canvas?.renderAll();
    }
  };

  const handleChangeItalic = () => {
    if (selectedObject && selectedObject.type === "textbox") {
      const fontStyle = !italic ? "italic" : "normal";
      selectedObject.set({ fontStyle });
      setItalic((prev) => !prev);
      canvas?.renderAll();
    }
  };

  const handleChangeTextAlign = (textAlign: TextAlign) => {
    if (selectedObject && selectedObject.type === "textbox") {
      selectedObject.set({ textAlign });
      setTextAlign(textAlign);
      canvas?.renderAll();
    }
  };

  // Does not work correctly, FIX
  const handleFontFamilyChange = (
    _: SyntheticEvent,
    newValue: string | null
  ) => {
    if (!newValue) return;
    loadGoogleFont(newValue);
    setFontFamily(newValue);

    document.fonts.ready.then(() => {
      if (selectedObject && selectedObject.type === "textbox") {
        const textObject = selectedObject as Textbox;

        selectedObject.set({ fontFamily: newValue });
        selectedObject.setCoords();
        canvas?.discardActiveObject();
        canvas?.renderAll();
      }
    });
  };

  return (
    <StyledCanvasSettings>
      {selectedObject && selectedObject.type === "rect" && (
        <RectSetting
          width={width}
          height={height}
          color={color}
          cornerRadius={cornerRadius}
          handleChangeCornerRadius={handleChangeCornerRadius}
          handleHeightChange={handleHeightChange}
          handleWidthChange={handleWidthChange}
          handleColorChange={handleColorChange}
        />
      )}
      {selectedObject && selectedObject.type === "circle" && (
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
      )}
      {selectedObject && selectedObject.type === "textbox" && (
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

          <Autocomplete
            onChange={handleFontSizeChange}
            value={fontSize}
            disablePortal
            sx={{ width: "250px" }}
            options={FONT_SIZE_OPTIONS}
            renderInput={(params) => (
              <TextField {...params} label="Font Size" />
            )}
          />

          <Autocomplete
            onChange={handleFontFamilyChange}
            value={fontFamily}
            disablePortal
            sx={{ width: "250px" }}
            options={fontFamilies}
            renderInput={(params) => (
              <TextField {...params} label="Font Family" />
            )}
          />

          <Autocomplete
            onChange={handleFontWeightChange}
            value={fontWeight}
            disablePortal
            sx={{ width: "250px" }}
            options={["Normal", "Bold"]}
            renderInput={(params) => (
              <TextField {...params} label="Font Weight" />
            )}
          />

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

          <TextField
            sx={{ marginTop: 2 }}
            type="color"
            onChange={handleColorChange}
            label="Color"
            value={color}
            fullWidth
          />
        </>
      )}
      {!!selectedObject || (
        <Box sx={{ width: 250 }}>
          <TextField
            type="color"
            onChange={handleChangeCanvasBg}
            label="Canvas Background"
            value={canvasBg}
            fullWidth
          />
        </Box>
      )}
    </StyledCanvasSettings>
  );
};

export default Settings;
