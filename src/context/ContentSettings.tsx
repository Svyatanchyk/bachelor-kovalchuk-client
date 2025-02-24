import {
  ChangeEvent,
  createContext,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import {
  CreativeContentContextType,
  CreativesContextProviderProps,
} from "./types";
import { SelectChangeEvent } from "@mui/material";

const CreativeContentContext = createContext<CreativeContentContextType | null>(
  null
);

export const useCreativeContentContext = () => {
  const context = useContext(CreativeContentContext);
  if (!context) {
    throw new Error(
      "CreativeContentContext must be used within a CreativeContentContextProvider"
    );
  }
  return context;
};

export const CreativeContentContextProvider = ({
  children,
}: CreativesContextProviderProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [numberOfTexts, setNumberOfTexts] = useState<number>(1);
  const [vertical, setVertical] = useState<string>("");
  const [textVariations, setTextVariations] = useState<Record<string, string>>(
    {}
  );

  const handleChangeCountry = (_: SyntheticEvent, newValue: string | null) => {
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

  const handleChangeTextVariations = (data: Record<string, string>) => {
    setTextVariations(data);
  };

  const value = {
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
  };
  return (
    <CreativeContentContext.Provider value={value}>
      {children}
    </CreativeContentContext.Provider>
  );
};
