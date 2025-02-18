import { TFiller } from "fabric";
import { ChangeEvent } from "react";

export interface RectSettingsProps {
  width: number | string | null;
  height: number | string | null;
  cornerRadius: number | string | null;
  color: string | TFiller | null;
  handleWidthChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleHeightChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCornerRadius: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
