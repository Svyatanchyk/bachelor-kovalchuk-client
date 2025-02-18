import { Autocomplete, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useEffect, useState } from "react";
import { fetchGooleFonts } from "../../../../services/googleFontsService";

interface Props {
  fontFamily: string | null;
  handleFontFamilyChange: (_: SyntheticEvent, newValue: string | null) => void;
}
const CreativeFontFamilySelector = ({
  fontFamily,
  handleFontFamilyChange,
}: Props) => {
  const [fontFamilies, setFontFamilies] = useState<string[] | null>([]);

  const { data: fonts } = useQuery({
    queryKey: ["googleFonts"],
    queryFn: fetchGooleFonts,
  });

  useEffect(() => {
    setFontFamilies(fonts || []);
  }, [fonts]);

  return (
    <Autocomplete
      onChange={handleFontFamilyChange}
      value={fontFamily}
      disablePortal
      sx={{ width: "250px" }}
      options={fontFamilies!}
      renderInput={(params) => <TextField {...params} label="Font Family" />}
    />
  );
};

export default CreativeFontFamilySelector;
