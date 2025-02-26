import { Box, Button, TextField } from "@mui/material";
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
import { useEffect } from "react";
import { useGenerateText } from "../../../hooks/useGenerateText";
import {
  fetchCountries,
  fetchLanguages,
} from "../../../services/countriesService";
import { useCreativeContentContext } from "../../../context/ContentSettings";

const ContentSettings = () => {
  const {
    selectedCountry,
    selectedLanguages,
    numberOfTexts,
    vertical,
    textVariations,
    handleChangeCountry,
    handleChangeLanguage,
    handleChangeNumberOfTexts,
    handleChangeVertical,
    handleChangeText,
    handleChangeTextVariations,
  } = useCreativeContentContext();

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

  const { mutate, isPending, data } = useGenerateText();

  const handleGenerateText = () => {
    if (!selectedCountry || !selectedLanguages.length || !vertical) return;

    const data = {
      country: selectedCountry,
      language: selectedLanguages,
      nText: numberOfTexts,
      vertical,
    };

    mutate(data);
  };

  useEffect(() => {
    if (data?.text && Object.keys(data.text).length)
      handleChangeTextVariations(data.text);
  }, [data]);

  useEffect(() => {
    console.log("Text variations");
    console.log(textVariations);
  }, [textVariations]);

  return (
    <StyledGenerationBlock>
      <StyledTypography>Content Settings</StyledTypography>
      <Box sx={{ display: "flex", gap: 10 }}>
        <StyledInputsBox>
          <CountrySelector
            countries={countries as string[]}
            handleChangeCountry={handleChangeCountry}
            selectedCountry={selectedCountry}
          />
          <LanguageSelector
            numberOfTexts={numberOfTexts}
            selectedLanguages={selectedLanguages}
            languages={languages as string[]}
            handleChangeLanguage={handleChangeLanguage}
          />

          <TextField
            required
            onChange={handleChangeVertical}
            value={vertical}
            label="Enter Vertical"
          />
          <VariationsSelector
            numberOfTexts={numberOfTexts}
            handleChangeNumberOfTexts={handleChangeNumberOfTexts}
          />

          {isPending ? (
            <Loader />
          ) : (
            <Button onClick={handleGenerateText} variant="contained">
              Generate Text
            </Button>
          )}
        </StyledInputsBox>

        {Object.keys(textVariations).length > 0 && (
          <Texts
            textVariations={textVariations}
            handleChangeText={handleChangeText}
          />
        )}
      </Box>
    </StyledGenerationBlock>
  );
};

export default ContentSettings;
