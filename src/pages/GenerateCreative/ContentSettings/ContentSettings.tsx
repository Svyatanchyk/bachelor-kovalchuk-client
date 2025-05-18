import { Box, Container } from "@mui/material";
import {
  StyledGenerationBlock,
  StyledInputsBox,
  StyledTypography,
} from "../styled";
import CountrySelector from "./CountrySelector";
import LanguageSelector from "./LanguageSelector";
import VariationsSelector from "./VariationsSelector";
import Loader from "../../../components/Loader";
import Texts from "./Texts";
import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useGenerateText } from "../../../hooks/useGenerateText";
import {
  fetchCountries,
  fetchLanguages,
} from "../../../services/countriesService";
import { useCreativeContentContext } from "../../../context/ContentSettings";
import VerticalInput from "./VerticalInput/VerticalInput";
import Button from "../../../components/Buttons/Button";

import coinsIcon from "/images/content/coins.svg";
import { StyledFlexBox } from "./styled";
import { TEXT_VARIATION_PRICE } from "../constants";
import { enqueueSnackbar } from "notistack";

const ContentSettings = () => {
  const {
    selectedCountry,
    selectedLanguage,
    numberOfTexts,
    vertical,
    textVariations,
    handleChangeCountry,
    handleChangeLanguage,
    handleChangeNumberOfTexts,
    handleChangeVertical,
    handleChangeTextVariations,
  } = useCreativeContentContext();

  const [priceForText, setPriceForText] = useState<number>(
    () => numberOfTexts * TEXT_VARIATION_PRICE
  );

  const results = useQueries({
    queries: [
      {
        queryKey: ["countries"],
        queryFn: fetchCountries,
        staleTime: 1000 * 60 * 5,
      },
      {
        queryKey: ["languages"],
        queryFn: fetchLanguages,
        staleTime: 1000 * 60 * 5,
      },
    ],
  });

  const [countries, languages] = results.map((result) => result.data);

  const { mutate, isPending, data: generatedText } = useGenerateText();

  const handleGenerateText = () => {
    if (!selectedCountry || !selectedLanguage || !vertical) {
      enqueueSnackbar("Будьласка заповніть всі поля", { variant: "error" });
      return;
    }

    const data = {
      country: selectedCountry,
      language: selectedLanguage,
      nText: numberOfTexts,
      vertical,
      price: priceForText,
    };

    mutate(data);
  };

  useEffect(() => {
    if (generatedText?.text && Object.keys(generatedText.text).length)
      handleChangeTextVariations(generatedText.text);
  }, [generatedText]);

  useEffect(() => {
    setPriceForText(numberOfTexts * TEXT_VARIATION_PRICE);
  }, [numberOfTexts]);

  return (
    <StyledGenerationBlock>
      <Container maxWidth="lg">
        <StyledTypography>Налаштування контенту</StyledTypography>

        <StyledFlexBox>
          <StyledInputsBox>
            <CountrySelector
              countries={countries as string[]}
              handleChangeCountry={handleChangeCountry}
              selectedCountry={selectedCountry}
            />

            <LanguageSelector
              selectedLanguage={selectedLanguage}
              languages={languages as string[]}
              handleChangeLanguage={handleChangeLanguage}
            />

            <VerticalInput onChange={handleChangeVertical} value={vertical} />

            <VariationsSelector
              activeButtonIndex={numberOfTexts}
              handleChangeNumberOfTexts={handleChangeNumberOfTexts}
            />

            {isPending ? (
              <Loader />
            ) : (
              <Button onClick={handleGenerateText}>
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
                    <span>{priceForText}</span>
                  </Box>
                </Box>
              </Button>
            )}
          </StyledInputsBox>

          {Object.keys(textVariations).length > 0 && (
            <Texts textVariations={textVariations} />
          )}
        </StyledFlexBox>
      </Container>
    </StyledGenerationBlock>
  );
};

export default ContentSettings;
