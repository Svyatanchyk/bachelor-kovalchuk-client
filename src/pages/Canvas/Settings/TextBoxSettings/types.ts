import { SyntheticEvent } from "react";
import { TextAlign } from "../TextAlign";
import { TFiller } from "fabric";

export interface TextBoxSettingsProps {
  width: number | string | null;
  height: number | string | null;
  fontSize: {
    id: number;
    label: string;
    fontSize: number;
  } | null;
  fontFamily: string | undefined;
  fontWeight: { id: number; value: string; label: string } | null;
  underline: boolean | undefined;
  italic: boolean | undefined;
  textAlign: TextAlign | null;
  color: string | TFiller | null;
  fontFamilies: string[];
  strokeFill: string | TFiller | null;
  strokeWidth: number | null;
  isUppercase: boolean;
  handleChangeStrokeFill: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeStrokeWidth: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWidthChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFontSizeChange: (
    _: SyntheticEvent,
    newValue: { id: number; fontSize: number; label: string } | null
  ) => void;
  handleFontFamilyChange: (_: SyntheticEvent, newValue: string | null) => void;
  handleFontWeightChange: (
    _: SyntheticEvent,
    newValue: { id: number; value: string; label: string } | null
  ) => void;
  handleChangeUnderline: () => void;
  handleChangeItalic: () => void;
  handleChangeTextAlign: (align: TextAlign) => void;
  handleColorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeUppercase: () => void;
}
