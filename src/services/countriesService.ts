import { EXTERNAL_API } from "../constants/apiRoutes";

const EXCLUDE_COUNTRIES = ["Russia", "Belarus"];

export interface Country {
  name: string;
}

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${EXTERNAL_API.REST_COUNTRIES}`);
  const data = await response.json();

  const filteredCountries = data
    .filter((country: any) => !EXCLUDE_COUNTRIES.includes(country.name.common))
    .map((country: any) => ({
      name: country.name.common,
    }));

  return filteredCountries;
};

export const fetchLanguages = async () => {
  const response = await fetch(`${EXTERNAL_API.REST_COUNTRIES}`);
  const data = await response.json();
  console.log(data);

  const languages = [
    ...new Set(
      data
        .slice(0, 50)
        .map((country: any) => Object.values(country.languages)[0] as string)
    ),
  ];

  return languages;
};
