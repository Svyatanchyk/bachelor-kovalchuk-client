import {
  ChangeEvent,
  createContext,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  CreativeContentContextType,
  CreativesContextProviderProps,
  TextType,
} from "./types";

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
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [numberOfTexts, setNumberOfTexts] = useState<number>(1);
  const [vertical, setVertical] = useState<string>("");
  const [textVariations, setTextVariations] = useState<TextType>({});

  const handleChangeCountry = (_: SyntheticEvent, newValue: string | null) => {
    setSelectedCountry(newValue);
  };

  const handleChangeLanguage = (_: SyntheticEvent, newValue: string | null) => {
    setSelectedLanguage(newValue);
  };

  const handleChangeNumberOfTexts = (numberOfTexts: number) => {
    setNumberOfTexts(numberOfTexts);
  };

  const handleChangeVertical = (event: ChangeEvent<HTMLInputElement>) => {
    setVertical(event.target.value);
  };

  const handleChangeTextVariations = (data: TextType) => {
    setTextVariations(data);
  };

  useEffect(() => {
    console.log("texts var: ", textVariations);
  }, [textVariations]);

  const value = {
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
  };
  return (
    <CreativeContentContext.Provider value={value}>
      {children}
    </CreativeContentContext.Provider>
  );
};
