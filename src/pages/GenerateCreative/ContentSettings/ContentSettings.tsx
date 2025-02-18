import { Box, Button, SelectChangeEvent, TextField } from "@mui/material";
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
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useGenerateText } from "../../../hooks/useGenerateText";
import {
  fetchCountries,
  fetchLanguages,
} from "../../../services/countriesService";

const ContentSettings = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [numberOfTexts, setNumberOfTexts] = useState<number>(1);
  const [vertical, setVertical] = useState<string>("");
  const [textVariations, setTextVariations] = useState<Record<string, string>>(
    {}
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

  const handleChangeCountry = (_: SyntheticEvent, newValue: string | null) => {
    console.log(newValue);

    setSelectedCountry(newValue);
  };

  const handleChangeLanguage = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];

    if (value.length > 4) return;

    setSelectedLanguages(value);
  };

  const handleChangeNumberOfTexts = (_: Event, newValue: number | number[]) => {
    setNumberOfTexts(newValue as number);
  };

  const handleChangeVertical = (event: ChangeEvent<HTMLInputElement>) => {
    setVertical(event.target.value);
  };

  const handleChangeText = (key: string, value: string) => {
    setTextVariations((prev) => ({ ...prev, [key]: value }));
  };

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

  const { mutate, isPending, data } = useGenerateText();

  useEffect(() => {
    if (data?.text && Object.keys(data.text).length)
      setTextVariations(data.text);
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
