import { MenuItem, SelectChangeEvent } from "@mui/material";
import { StyledSelect } from "./styled";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LanguageSelector = () => {
  const [language, setLanguage] = useState<string>("UA");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    console.log(event.target.value);

    setLanguage(event.target.value as string);
  };

  return (
    <StyledSelect
      value={language}
      onChange={handleChange}
      IconComponent={() => (
        <KeyboardArrowDownIcon sx={{ color: "common.white", padding: 0 }} />
      )}
    >
      <MenuItem value="UA">UA</MenuItem>
      <MenuItem value="EN">EN</MenuItem>
      <MenuItem value="ES">ES</MenuItem>
    </StyledSelect>
  );
};

export default LanguageSelector;
