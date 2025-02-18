import { TFiller } from "fabric";
import { ChangeEvent } from "react";

export interface CircleSettingsProps {
  diameter: number | string | null;
  color: string | TFiller | null;
  handleDiameterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
