import { Box, Button, SelectChangeEvent, TextField } from "@mui/material";

import {
  StyledGenerationBlock,
  StyledInputsBox,
  StyledTypography,
  StyledWrapper,
} from "./styled";

import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import {
  fetchCountries,
  fetchLanguages,
} from "../../services/countriesService";
import Loader from "../../components/Loader";
import LanguageSelector from "./LanguageSelector";
import CountrySelector from "./CountrySelector";
import { useGenerateText } from "../../hooks/useGenerateText";
import Texts from "./Texts";
import VariationsSelector from "./VariationsSelector";

const GenerateCreative = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [numberOfTexts, setNumberOfTexts] = useState<number>(1);
  const [vertical, setVertical] = useState<string>("");
  const [textVariations, setTextVariations] = useState<Record<string, string>>(
    {}
  );

  const [
    { data: countries, isLoading: isLoadingCountries, error: errorCountries },
    { data: languages, isLoading: isLoadingLanguages, error: errorLanguages },
  ] = useQueries({
    queries: [
      { queryKey: ["countries"], queryFn: fetchCountries },
      { queryKey: ["languages"], queryFn: fetchLanguages },
    ],
  });

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

  const isLoading = isLoadingCountries || isLoadingLanguages;
  const hasError = errorCountries || errorLanguages;

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>Error loading data</p>;

  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

export default GenerateCreative;
