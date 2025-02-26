import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
} from "react";
import { fontSizeType } from "../pages/GenerateCreative/CreativeSettings/types";
import { SelectChangeEvent } from "@mui/material";

export interface CreativesContextType {
  creatives: any[];
  setCreatives: Dispatch<SetStateAction<any[]>>;
}

export interface CreativesContextProviderProps {
  children: ReactNode;
}

export interface CreativeContextSettingsType {
  fontSize: fontSizeType;
  fontFamily: string;
  textColor: string | null;
  bgColor: string | null;
  creativeFormats: Record<string, boolean>;
  addImage: Record<string, boolean>;
  addFlag: Record<string, boolean>;
  addCallToAction: Record<string, boolean>;
  highlightKeywords: Record<string, boolean>;
  handleFontSizeChange: (
    _: SyntheticEvent,
    newValue: { id: number; fontSize: number; label: string } | null
  ) => void;
  handleFontFamilyChange: (_: SyntheticEvent, newValue: string | null) => void;
  handleTextColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBgColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
  textVariations: Record<string, string>;
  handleChangeCountry: (_: SyntheticEvent, newValue: string | null) => void;
  handleChangeLanguage: (event: SelectChangeEvent<string[]>) => void;
  handleChangeNumberOfTexts: (_: Event, newValue: number | number[]) => void;
  handleChangeVertical: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeText: (key: string, value: string) => void;
  handleChangeTextVariations: (data: Record<string, string>) => void;
}
