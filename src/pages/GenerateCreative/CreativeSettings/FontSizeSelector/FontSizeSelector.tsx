import { Autocomplete, TextField } from "@mui/material";
import { FONT_SIZE_OPTIONS } from "../../../Canvas/Settings/utils/fontSizeOptions";
import { SyntheticEvent } from "react";
import { fontSizeType } from "../types";

interface Props {
  fontSize: fontSizeType;
  handleFontSizeChange: (
    _: SyntheticEvent,
    newValue: { id: number; fontSize: number; label: string } | null
  ) => void;
}
const FontSizeSelector = ({ fontSize, handleFontSizeChange }: Props) => {
  return (
    <Autocomplete
      onChange={handleFontSizeChange}
      value={fontSize}
      disablePortal
      sx={{ width: "250px" }}
      options={FONT_SIZE_OPTIONS}
      renderInput={(params) => <TextField {...params} label="Font Size" />}
    />
  );
};

export default FontSizeSelector;
