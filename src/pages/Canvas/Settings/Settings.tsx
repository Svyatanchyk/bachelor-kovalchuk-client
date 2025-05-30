import {
  Canvas,
  Circle,
  FabricObject,
  Group,
  Line,
  Rect,
  Textbox,
  TFiller,
  Triangle,
} from "fabric";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { StyledCanvasSettings } from "./styled";
import { FONT_SIZE_OPTIONS } from "./utils/fontSizeOptions";

import { TextAlign } from "./TextAlign";
import RectSettings from "./RectSettings";
import CircleSettings from "./CircleSettings";
import TextBoxSettings from "./TextBoxSettings";
import CanvasSettings from "./CanvasSettings";
import { fetchGooleFonts } from "../../../services/googleFontsService";
import ArrowSettings from "./ArrowSettings";
import LineSettings from "./LineSettings";
import TriangleSettings from "./TriangleSettings";

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
  const [strokeFill, setStrokeFill] = useState<string | TFiller | null>(
    "#0f0f0f"
  );
  const [canvasBg, setCanvasBg] = useState<string | TFiller | null>("#c4c4c4");
  const [fontSize, setFontSize] = useState<{
    id: number;
    label: string;
    fontSize: number;
  } | null>(null);
  const [fontFamilies, setFontFamilies] = useState<string[]>([]);
  const [fontFamily, setFontFamily] = useState<string>();
  const [fontWeight, setFontWeight] = useState<{
    id: number;
    label: string;
    value: string;
  } | null>(null);
  const [underline, setUnderline] = useState<boolean>();
  const [italic, setItalic] = useState<boolean>();
  const [isUppercase, setIsUppercase] = useState<boolean>(false);
  const [textAlign, setTextAlign] = useState<TextAlign | null>(null);
  const [strokeWidth, setStrokeWidth] = useState<number | null>(null);

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
      setStrokeFill(object.stroke);
      setStrokeWidth(object.strokeWidth);
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
      setFontWeight({
        id: Date.now(),
        value: object.fontWeight as string,
        label: object.fontWeight === "normal" ? "Звичайний" : "Жирний",
      });
      setDiameter("");
      setUnderline(object.underline);
      setStrokeFill(object.stroke);
      setStrokeWidth(object.strokeWidth);
      if (["center", "left", "right"].includes(object.textAlign)) {
        setTextAlign(object.textAlign as TextAlign);
      }
    }

    if (object instanceof Group) {
      object.getObjects().forEach((obj) => {
        setColor(obj.fill);
        setStrokeWidth(obj.strokeWidth);
        setStrokeFill(obj.stroke);
      });
    }

    if (object instanceof Line) {
      setWidth(object.width);
      setStrokeWidth(object.strokeWidth);
      setStrokeFill(object.stroke);
    }

    if (object instanceof Triangle) {
      setStrokeWidth(object.strokeWidth);
      setStrokeFill(object.stroke);
      setColor(object.fill);
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
      (selectedObject.type === "rect" || selectedObject.type === "textbox") &&
      initValue >= 0
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
        selectedObject.type === "textbox" ||
        (selectedObject.type === "line" && initValue >= 0))
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

    if (
      selectedObject &&
      (selectedObject instanceof Textbox ||
        selectedObject instanceof Rect ||
        selectedObject instanceof Circle ||
        selectedObject instanceof Triangle)
    ) {
      selectedObject.set({ fill: value });
    } else if (selectedObject && selectedObject instanceof Group) {
      selectedObject.getObjects().forEach((obj) => {
        obj.set({
          fill: value,
        });
        selectedObject.setCoords();
      });
    }

    canvas?.renderAll();
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
    newValue: { id: number; value: string; label: string } | null
  ) => {
    if (!newValue) return;
    setFontWeight(newValue);

    if (selectedObject && selectedObject.type === "textbox") {
      selectedObject.set({ fontWeight: newValue.value });
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

  const handleFontFamilyChange = (
    _: SyntheticEvent,
    newValue: string | null
  ) => {
    if (!newValue || !selectedObject || !(selectedObject instanceof Textbox))
      return;

    setFontFamily(newValue);

    document.fonts.ready.then(() => {
      console.log("Font loaded");

      selectedObject.set({
        fontFamily: newValue,
        width: selectedObject.width + 1,
      });
      selectedObject.dirty = true;
      selectedObject.setCoords();
      canvas?.renderAll();

      setTimeout(() => {
        selectedObject.set({ width: selectedObject.width - 1 });
        selectedObject.setCoords();
        const activeObject = canvas?.getActiveObject() as Textbox;
        canvas?.discardActiveObject();
        canvas?.renderAll();
        canvas?.setActiveObject(activeObject);
        canvas?.renderAll();
      }, 10);
    });
  };

  const handleChangeStrokeFill = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setStrokeFill(value);

    if (
      selectedObject &&
      (selectedObject instanceof Textbox ||
        selectedObject instanceof Circle ||
        selectedObject instanceof Rect ||
        selectedObject instanceof Line ||
        selectedObject instanceof Triangle)
    ) {
      selectedObject.set({ stroke: value });
    } else if (selectedObject && selectedObject instanceof Group) {
      selectedObject.getObjects().forEach((obj) => {
        obj.set({
          stroke: value,
        });
        selectedObject.setCoords();
      });
    }

    canvas?.renderAll();
  };

  const handleChangeStrokeWidth = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    if (value === "" || isNaN(initValue) || initValue < 0) {
      setStrokeWidth(null);
      return;
    }

    setStrokeWidth(initValue);

    if (
      selectedObject &&
      initValue >= 0 &&
      (selectedObject instanceof Rect ||
        selectedObject instanceof Textbox ||
        selectedObject instanceof Line ||
        selectedObject instanceof Triangle)
    ) {
      selectedObject.set({ strokeWidth: initValue });
      selectedObject.setCoords();
    } else if (
      selectedObject &&
      selectedObject instanceof Group &&
      initValue >= 0
    ) {
      selectedObject.getObjects().forEach((obj) => {
        obj.set({
          strokeWidth: initValue,
        });
        selectedObject.setCoords();
      });
    }

    canvas?.renderAll();
  };

  const handleChangeUppercase = () => {
    if (selectedObject && selectedObject instanceof Textbox) {
      if (isUppercase)
        selectedObject.set({ text: selectedObject.text.toLowerCase() });
      else
        selectedObject.set({ text: selectedObject.text.toLocaleUpperCase() });

      setIsUppercase((prev) => !prev);
      canvas?.renderAll();
    } else {
      console.log("Selected object is not a Textbox");
    }
  };

  return (
    <StyledCanvasSettings>
      {selectedObject instanceof Rect && (
        <RectSettings
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
      {selectedObject && selectedObject instanceof Circle && (
        <CircleSettings
          diameter={diameter}
          color={color}
          handleColorChange={handleColorChange}
          handleDiameterChange={handleDiameterChange}
        />
      )}
      {selectedObject && selectedObject instanceof Textbox && (
        <TextBoxSettings
          strokeFill={strokeFill}
          strokeWidth={strokeWidth}
          textAlign={textAlign}
          fontFamily={fontFamily}
          color={color}
          fontFamilies={fontFamilies}
          fontSize={fontSize}
          fontWeight={fontWeight}
          width={width}
          height={height}
          underline={underline}
          italic={italic}
          isUppercase={isUppercase}
          handleChangeStrokeFill={handleChangeStrokeFill}
          handleChangeStrokeWidth={handleChangeStrokeWidth}
          handleChangeItalic={handleChangeItalic}
          handleChangeUnderline={handleChangeUnderline}
          handleFontFamilyChange={handleFontFamilyChange}
          handleChangeTextAlign={handleChangeTextAlign}
          handleColorChange={handleColorChange}
          handleFontSizeChange={handleFontSizeChange}
          handleHeightChange={handleHeightChange}
          handleWidthChange={handleWidthChange}
          handleFontWeightChange={handleFontWeightChange}
          handleChangeUppercase={handleChangeUppercase}
        />
      )}
      {selectedObject && selectedObject instanceof Group && (
        <ArrowSettings
          handleChangeStrokeFill={handleChangeStrokeFill}
          handleColorChange={handleColorChange}
          handleChangeStrokeWidth={handleChangeStrokeWidth}
          color={color}
          strokeFill={strokeFill}
          strokeWidth={strokeWidth}
        />
      )}

      {selectedObject && selectedObject instanceof Line && (
        <LineSettings
          strokeWidth={strokeWidth}
          handleChangeStrokeWidth={handleChangeStrokeWidth}
          handleColorChange={handleChangeStrokeFill}
          color={strokeFill}
        />
      )}

      {selectedObject && selectedObject instanceof Triangle && (
        <TriangleSettings
          strokeWidth={strokeWidth}
          handleChangeStrokeWidth={handleChangeStrokeWidth}
          handleColorChange={handleColorChange}
          color={color}
          strokeFill={strokeFill}
          handleChangeStrokeFill={handleChangeStrokeFill}
        />
      )}
      {!!selectedObject || (
        <CanvasSettings
          canvasBg={canvasBg}
          handleChangeCanvasBg={handleChangeCanvasBg}
        />
      )}
    </StyledCanvasSettings>
  );
};

export default Settings;
