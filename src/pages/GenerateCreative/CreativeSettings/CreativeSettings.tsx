import { Box, Button } from "@mui/material";
import { StyledTypography } from "../styled";
import { StyledGenerationBlock } from "./styled";
import { useState } from "react";

import { generateCreative } from "../creatives";
import CreativeFontFamilySelector from "./CreativeFontFamilySelector";
import FontSizeSelector from "./FontSizeSelector";
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
import { useCreativeSettingsContext } from "../../../context/CreativeSettings";

const CreativeSettings = () => {
  const [generatedCreatives, setGeneratedCreatives] = useState<any[]>([]);

  const {
    fontSize,
    fontFamily,
    textColor,
    bgColor,
    creativeFormats,
    addImage,
    addFlag,
    addCallToAction,
    highlightKeywords,
    handleBgColorChange,
    handleChangeAddCallToAction,
    handleChangeAddFlag,
    handleChangeAddImage,
    handleChangeFormat,
    handleChangeHighlightKeywords,
    handleFontFamilyChange,
    handleFontSizeChange,
    handleTextColorChange,
  } = useCreativeSettingsContext();

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
