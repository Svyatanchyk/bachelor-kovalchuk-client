import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
} from "react";
import { SelectChangeEvent } from "@mui/material";

export interface CreativesContextType {
  creatives: any[];
  setCreatives: Dispatch<SetStateAction<any[]>>;
  activeCreative: number | null;
  setActiveCreative: Dispatch<SetStateAction<number | null>>;
}

export interface CreativesContextProviderProps {
  children: ReactNode;
}

export interface CreativeContextSettingsType {
  creativeFormats: string;
  addImage: string;
  addFlag: string;
  addCtaArrow: string;
  addCtaBtn: string;
  handleChangeFormat: (key: string) => void;
  handleChangeAddImage: (key: string) => void;
  handleChangeAddFlag: (key: string) => void;
  handleChangeAddCtaArrow: (key: string) => void;
  handleChangeAddCtaBtn: (key: string) => void;
}

export interface CreativeContentContextType {
  selectedCountry: string | null;
  selectedLanguage: string | null;
  numberOfTexts: number;
  vertical: string;
  textVariations: TextType;
  handleChangeCountry: (_: SyntheticEvent, newValue: string | null) => void;
  handleChangeLanguage: (_: SyntheticEvent, newValue: string | null) => void;
  handleChangeNumberOfTexts: (numberOfTexts: number) => void;
  handleChangeVertical: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextVariations: (data: TextType) => void;
}

export type TextType = {
  [key: number]: string[];
};
