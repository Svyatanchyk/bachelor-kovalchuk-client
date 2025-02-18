import { Box, Button } from "@mui/material";
import { StyledTypography } from "../styled";
import { StyledGenerationBlock } from "./styled";
import { ChangeEvent, SyntheticEvent, useState } from "react";

import { generateCreative } from "../creatives";
import CreativeFontFamilySelector from "./CreativeFontFamilySelector";
import FontSizeSelector from "./FontSizeSelector";
import { fontSizeType } from "./types";
import { FONT_SIZE_OPTIONS } from "../../Canvas/Settings/utils/fontSizeOptions";
import ColorSelector from "./ColorSelector";
import ResultText from "./ResultText";
import ToogleOptionSelector from "./ToogleOptionSelector";
import {
  ADD_IMAGE,
  CALL_TO_ACTION,
  FLAG_EMODJI,
  FORMATS,
  HIGHLIGHT_KEYWORDS,
} from "./constants";

const CreativeSettings = () => {
  const [generatedCreatives, setGeneratedCreatives] = useState<any[]>([]);

  const [fontSize, setFontSize] = useState<fontSizeType>(
    () => FONT_SIZE_OPTIONS[5]
  );
  const [fontFamily, setFontFamily] = useState<string>("Roboto");
  const [textColor, setTextColor] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState<string | null>(null);
  const [creativeFormats, setCreativeFormats] = useState<
    Record<string, boolean>
  >({
    square: true,
    portrait: false,
  });

  const [addImage, setAddImage] = useState<Record<string, boolean>>({
    yes: true,
    no: false,
  });

  const [addFlag, setAddFlag] = useState<Record<string, boolean>>({
    yes: true,
    no: false,
  });

  const [addCallToAction, setAddCallToAction] = useState<
    Record<string, boolean>
  >({
    yes: true,
    no: false,
  });

  const [highlightKeywords, setHighlightKeywords] = useState<
    Record<string, boolean>
  >({
    yes: true,
    no: false,
  });

  const handleFontSizeChange = (
    _: SyntheticEvent,
    newValue: { id: number; fontSize: number; label: string } | null
  ) => {
    if (!newValue) return;
    setFontSize(newValue);
  };

  const handleFontFamilyChange = (
    _: SyntheticEvent,
    newValue: string | null
  ) => {
    if (!newValue) return;
    setFontFamily(newValue);
  };

  const handleTextColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextColor(value);
  };

  const handleBgColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBgColor(value);
  };

  const handleChangeFormat = (key: string) => {
    setCreativeFormats((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangeAddImage = (key: string) => {
    setAddImage((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangeAddFlag = (key: string) => {
    setAddFlag((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangeAddCallToAction = (key: string) => {
    setAddCallToAction((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChangeHighlightKeywords = (key: string) => {
    setHighlightKeywords((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGenerateCreative = async () => {
    if (!textColor || !fontSize || !fontFamily || !bgColor) return;
    const result = await generateCreative({
      text: "Unleash joy with our toys! Click to explore endless fun!",
      fontColor: textColor,
      fontSize: fontSize.fontSize,
      bgColor: bgColor,
      addImage: true,
    });

    console.log(result);
    setGeneratedCreatives((prev) => [...prev, result]);
    localStorage.setItem("creative", JSON.stringify(result));
  };

  return (
    <StyledGenerationBlock>
      <StyledTypography>Creative Settings</StyledTypography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <ToogleOptionSelector
          state={creativeFormats}
          handleToogleButton={handleChangeFormat}
          options={FORMATS}
          label="Choose format"
        />

        <Box sx={{ display: "flex", gap: 3 }}>
          <CreativeFontFamilySelector
            fontFamily={fontFamily}
            handleFontFamilyChange={handleFontFamilyChange}
          />

          <FontSizeSelector
            fontSize={fontSize}
            handleFontSizeChange={handleFontSizeChange}
          />

          <ColorSelector
            label="Font color"
            handleColorChange={handleTextColorChange}
            color={textColor}
          />

          <ColorSelector
            label="Background color"
            handleColorChange={handleBgColorChange}
            color={bgColor}
          />
        </Box>

        <ResultText
          fontFamily={fontFamily}
          fontSize={fontSize}
          bgColor={bgColor}
          textColor={textColor}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 5 }}>
        <ToogleOptionSelector
          label="Add Image"
          state={addImage}
          handleToogleButton={handleChangeAddImage}
          options={ADD_IMAGE}
        />
        <ToogleOptionSelector
          label="Add Flags Emodji"
          state={addFlag}
          handleToogleButton={handleChangeAddFlag}
          options={FLAG_EMODJI}
        />
        <ToogleOptionSelector
          label="Add CTA elements"
          state={addCallToAction}
          handleToogleButton={handleChangeAddCallToAction}
          options={CALL_TO_ACTION}
        />

        <ToogleOptionSelector
          label="Highlight keyword"
          state={highlightKeywords}
          handleToogleButton={handleChangeHighlightKeywords}
          options={HIGHLIGHT_KEYWORDS}
        />
      </Box>

      <Button
        onClick={handleGenerateCreative}
        sx={{ marginTop: 10 }}
        variant="contained"
      >
        Generate
      </Button>
    </StyledGenerationBlock>
  );
};

export default CreativeSettings;
