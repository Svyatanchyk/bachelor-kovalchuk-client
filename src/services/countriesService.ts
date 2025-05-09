import { EXTERNAL_API } from "../constants/apiRoutes";

const EXCLUDE_COUNTRIES = [
  "Russia",
  "Belarus",
  "Iran",
  "Irak",
  "Afghanistan",
  "North Korea",
];

const EXCLUDE_LANGUAGES = [
  "Russian",
  "Belarusian",
  "Persian",
  "Korean",
  "Dari",
];

export const fetchCountries = async (): Promise<string[]> => {
  const response = await fetch(`${EXTERNAL_API.REST_COUNTRIES}`);
  const data = await response.json();

  console.log("Fetched countries: ", data);

  const filteredCountries = data
    .filter((country: any) => !EXCLUDE_COUNTRIES.includes(country.name.common))
    .map((country: any) => country.name.common);

  return filteredCountries;
};

export const fetchLanguages = async () => {
  const response = await fetch(`${EXTERNAL_API.REST_COUNTRIES}`);
  const data = await response.json();

  const languages = [
    ...new Set(
      data
        .filter(
          (country: any) =>
            country.languages && Object.keys(country.languages).length > 0
        )
        .map((country: any) => Object.values(country.languages)[0] as string)
        .filter((language: string) => !EXCLUDE_LANGUAGES.includes(language))
    ),
  ];

  return languages;
};
