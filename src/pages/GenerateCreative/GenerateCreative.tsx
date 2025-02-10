import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

import {
  StyledGenerationBlock,
  StyledTypography,
  StyledWrapper,
} from "./styled";

import { ChangeEvent, useState } from "react";
import { useMutation, useQueries } from "@tanstack/react-query";
import {
  Country,
  fetchCountries,
  fetchLanguages,
} from "../../services/countriesService";
import { generateText } from "../../services/generateTextService";
import Loader from "../../components/Loader";

const GenerateCreative = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [numberOfTexts, setNumberOfTexts] = useState<number>(1);
  const [vertical, setVertical] = useState<string>("");

  const results = useQueries({
    queries: [
      {
        queryKey: ["countries"],
        queryFn: fetchCountries,
      },
      {
        queryKey: ["languages"],
        queryFn: fetchLanguages,
      },
    ],
  });

  const countries = results[0].data;
  const isLoadingCountries = results[0].isLoading;
  const errorCountries = results[0].error;

  const languages: string[] = results[1].data as string[];
  const isLoadingLanguages = results[1].isLoading;
  const errorLanguages = results[1].error;

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value);
  };

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeNumberOfTexts = (_: Event, newValue: number | number[]) => {
    setNumberOfTexts(newValue as number);
  };

  const handleChangeVertical = (event: ChangeEvent<HTMLInputElement>) => {
    setVertical(event.target.value);
  };

  const { mutate, isPending, data } = useMutation({
    mutationFn: generateText,
    onSuccess: (data: any) => {
      console.log("Text:", data);
    },
    onError: (error: any) => {
      console.error(
        "Error during generating text:",
        error.response?.data?.message || error.message
      );
    },
  });

  const handleGenerateText = () => {
    const data = {
      country: selectedCountry,
      language: selectedLanguage,
      nText: numberOfTexts,
      vertical,
    };

    mutate(data);
  };

  if (isLoadingCountries || isLoadingLanguages) return <p>Loading...</p>;
  if (errorCountries || errorLanguages) return <p>Error loading data</p>;

  return (
    <StyledWrapper>
      <StyledGenerationBlock>
        <StyledTypography>Content Settings</StyledTypography>
        <Box sx={{ display: "flex", gap: 10 }}>
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              maxWidth: 300,
              width: "100%",
            }}
          >
            <FormControl>
              <InputLabel id="geo-select-label">Country</InputLabel>
              <Select
                required
                labelId="geo-select-label"
                value={selectedCountry}
                label="Country"
                onChange={handleChangeCountry}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      overflowY: "auto",
                      maxWidth: 300,
                    },
                  },
                }}
              >
                {countries?.map((country: Country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="lang-select-label">Language</InputLabel>
              <Select
                required
                labelId="lang-select-label"
                value={selectedLanguage}
                label="Language"
                onChange={handleChangeLanguage}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      overflowY: "auto",
                      maxWidth: 300,
                    },
                  },
                }}
              >
                {languages?.map((lang: string) => (
                  <MenuItem key={lang} value={lang}>
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              required
              onChange={handleChangeVertical}
              value={vertical}
              label="Vertical Name"
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Slider
                value={numberOfTexts}
                onChange={handleChangeNumberOfTexts}
                max={4}
                min={1}
              />
              <Box sx={{ fontWeight: 700 }}>{numberOfTexts} texts</Box>
            </Box>

            {isPending ? (
              <Loader />
            ) : (
              <Button onClick={handleGenerateText} variant="contained">
                Generate Text
              </Button>
            )}
          </Box>
          {data && (
            <Box
              sx={{
                border: "1px solid #000",
                width: "100%",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                padding: 2,
              }}
            >
              {Object.keys(data.text).map((key) => (
                <TextField value={data.text[key]} />
              ))}
            </Box>
          )}
        </Box>
      </StyledGenerationBlock>
    </StyledWrapper>
  );
};

export default GenerateCreative;
