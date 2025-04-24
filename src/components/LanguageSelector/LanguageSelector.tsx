import { Box, MenuItem, SelectChangeEvent } from "@mui/material";
import { StyledSelect } from "./styled";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LanguageSelector = () => {
  const [language, setLanguage] = useState<string>("UA");
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    console.log(event.target.value);

    setLanguage(event.target.value as string);
  };

  return (
    <Box
      onClick={() => setIsSelectOpen(!isSelectOpen)}
      sx={{ position: "relative", zIndex: 5, width: "70px", cursor: "pointer" }}
    >
      <StyledSelect
        open={isSelectOpen}
        value={language}
        onChange={handleChange}
      >
        <MenuItem value="UA">UA</MenuItem>
        <MenuItem value="EN">EN</MenuItem>
        <MenuItem value="ES">ES</MenuItem>
      </StyledSelect>

      <KeyboardArrowDownIcon
        sx={{
          zIndex: 1,
          position: "absolute",
          top: "50%",
          right: 2,
          transform: "translateY(-50%)",
          color: "common.white",
        }}
      />
    </Box>
  );
};

export default LanguageSelector;
