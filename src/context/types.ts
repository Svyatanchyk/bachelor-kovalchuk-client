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
  creativeFormats: Record<string, boolean>;
  addImage: Record<string, boolean>;
  addFlag: Record<string, boolean>;
  addCallToAction: Record<string, boolean>;
  highlightKeywords: Record<string, boolean>;
  handleChangeFormat: (key: string) => void;
  handleChangeAddImage: (key: string) => void;
  handleChangeAddFlag: (key: string) => void;
  handleChangeAddCallToAction: (key: string) => void;
  handleChangeHighlightKeywords: (key: string) => void;
}

export interface CreativeContentContextType {
  selectedCountry: string | null;
  selectedLanguages: string[];
  numberOfTexts: number;
  vertical: string;
  textVariations: TextType;
  handleChangeCountry: (_: SyntheticEvent, newValue: string | null) => void;
  handleChangeLanguage: (event: SelectChangeEvent<string[]>) => void;
  handleChangeNumberOfTexts: (_: Event, newValue: number | number[]) => void;
  handleChangeVertical: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeText: (key: number, index: number, value: string) => void;
  handleChangeTextVariations: (data: TextType) => void;
}

export type TextType = {
  [key: number]: string[];
};
