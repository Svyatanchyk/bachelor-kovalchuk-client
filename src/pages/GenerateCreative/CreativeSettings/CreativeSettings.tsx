import { Box, Container } from "@mui/material";
import { StyledTypography } from "../styled";
import {
  StyledConfigBox,
  StyledCreativesBox,
  StyledFlexBox,
  StyledGenerationBlock,
} from "./styled";

import ToogleOptionSelector from "./ToogleOptionSelector";
import { ADD_IMAGE, CALL_TO_ACTION, FLAG_EMODJI, FORMATS } from "./constants";
import { useCreativeSettingsContext } from "../../../context/CreativeSettings";
import { useCreativesContext } from "../../../context/CreativesContext";
import { useCreativeContentContext } from "../../../context/ContentSettings";
import { generateCreative } from "../creative";
import { useEffect, useState } from "react";
import CanvasPage from "../../Canvas";

import CreativesPreview from "./CreativesPreview";
import EditorDialog from "../EditorDialog";
import coinsIcon from "/images/content/coins.svg";
import Button from "../../../components/Buttons/Button";
import { CREATIVE_VARIATION_PRICE } from "../ContentSettings/constants";

const CreativeSettings = () => {
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const { creatives } = useCreativesContext();

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  const handleOpenEditor = () => {
    setIsEditorOpen(true);
  };

  const {
    selectedCountry,
    selectedLanguage,
    numberOfTexts,
    vertical,
    textVariations,
  } = useCreativeContentContext();

  const [creativesPrice, setCreativesPrice] = useState<number>(
    () => numberOfTexts * CREATIVE_VARIATION_PRICE
  );

  const {
    creativeFormats,
    addImage,
    addFlag,
    addCtaArrow,
    addCtaBtn,
    handleChangeAddCtaBtn,
    handleChangeAddCtaArrow,
    handleChangeAddFlag,
    handleChangeAddImage,
    handleChangeFormat,
  } = useCreativeSettingsContext();

  const { setCreatives } = useCreativesContext();

  const handleGenerateCreative = async () => {
    const result = await generateCreative({
      selectedCountry,
      selectedLanguage,
      numberOfTexts,
      vertical,
      textVariations,
      creativeFormats,
      addImage,
      addFlag,
      addCtaArrow,
      addCtaBtn,
    });

    console.log(result);
    setCreatives((prev) => [...prev, ...result]);
  };

  useEffect(() => {
    setCreativesPrice(numberOfTexts * CREATIVE_VARIATION_PRICE);
  }, [numberOfTexts]);

  return (
    <StyledGenerationBlock>
      <Container maxWidth="lg">
        <StyledTypography>Налаштування Креативів</StyledTypography>

        <StyledFlexBox>
          <StyledConfigBox>
            <ToogleOptionSelector
              state={creativeFormats}
              handleToogleButton={handleChangeFormat}
              options={FORMATS}
              label="Формат"
            />

            <ToogleOptionSelector
              label="Додати зображення"
              state={addImage}
              handleToogleButton={handleChangeAddImage}
              options={ADD_IMAGE}
            />
            <ToogleOptionSelector
              label="Додати емоджі прапору"
              state={addFlag}
              handleToogleButton={handleChangeAddFlag}
              options={FLAG_EMODJI}
            />
            <ToogleOptionSelector
              label="Додати CTA стрілку"
              state={addCtaArrow}
              handleToogleButton={handleChangeAddCtaArrow}
              options={CALL_TO_ACTION}
            />

            <ToogleOptionSelector
              label="Додати ЗДД Кнопку"
              state={addCtaBtn}
              handleToogleButton={handleChangeAddCtaBtn}
              options={CALL_TO_ACTION}
            />

            <Box sx={{ mt: 3 }}>
              <Button onClick={handleGenerateCreative}>
                <Box
                  component="p"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  Згенерувати{" "}
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    component="p"
                  >
                    <img width={15} src={coinsIcon} alt="Coins" />
                    <span>{creativesPrice}</span>
                  </Box>
                </Box>
              </Button>
            </Box>
          </StyledConfigBox>

          <StyledCreativesBox>
            {creatives.length > 0 && (
              <CreativesPreview
                isChangeble={false}
                handleOpenEditor={handleOpenEditor}
              />
            )}
          </StyledCreativesBox>
        </StyledFlexBox>

        <EditorDialog
          handleOpenEditor={handleOpenEditor}
          isEditorOpen={isEditorOpen}
          handleCloseEditor={handleCloseEditor}
        >
          <CanvasPage />
        </EditorDialog>
      </Container>
    </StyledGenerationBlock>
  );
};

export default CreativeSettings;
