import { Box, Button } from "@mui/material";
import { StyledTypography } from "../styled";
import { StyledGenerationBlock } from "./styled";

import ToogleOptionSelector from "./ToogleOptionSelector";
import { ADD_IMAGE, CALL_TO_ACTION, FLAG_EMODJI, FORMATS } from "./constants";
import { useCreativeSettingsContext } from "../../../context/CreativeSettings";
import { useCreativesContext } from "../../../context/CreativesContext";
import { useCreativeContentContext } from "../../../context/ContentSettings";
import { generateCreative } from "../creative";
import { useState } from "react";
import CanvasPage from "../../Canvas";

import CreativesPreview from "./CreativesPreview";
import EditorDialog from "../EditorDialog";

const CreativeSettings = () => {
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  const handleOpenEditor = () => {
    setIsEditorOpen(true);
  };

  const {
    creativeFormats,
    addImage,
    addFlag,
    addCallToAction,
    handleChangeAddCallToAction,
    handleChangeAddFlag,
    handleChangeAddImage,
    handleChangeFormat,
  } = useCreativeSettingsContext();

  const {
    selectedCountry,
    selectedLanguages,
    numberOfTexts,
    vertical,
    textVariations,
  } = useCreativeContentContext();

  const { setCreatives } = useCreativesContext();

  const handleGenerateCreative = async () => {
    const result = await generateCreative({
      selectedCountry,
      selectedLanguages,
      numberOfTexts,
      vertical,
      textVariations,
      creativeFormats,
      addImage,
      addFlag,
      addCallToAction,
    });

    console.log(result);
    setCreatives((prev) => [...prev, ...result]);
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
      </Box>

      <Button
        onClick={handleGenerateCreative}
        sx={{ marginTop: 10 }}
        variant="contained"
      >
        Generate
      </Button>

      <Box sx={{ mt: 10 }}>
        <CreativesPreview
          isChangeble={false}
          handleOpenEditor={handleOpenEditor}
        />
      </Box>

      <EditorDialog
        handleOpenEditor={handleOpenEditor}
        isEditorOpen={isEditorOpen}
        handleCloseEditor={handleCloseEditor}
      >
        <CanvasPage />
      </EditorDialog>
    </StyledGenerationBlock>
  );
};

export default CreativeSettings;
