import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

type Props = {
  selectedLanguages: string[];
  handleChangeLanguage: (event: SelectChangeEvent<string[]>) => void;
  languages: string[];
  numberOfTexts: number;
};
const LanguageSelector = ({
  selectedLanguages,
  handleChangeLanguage,
  languages,
  numberOfTexts,
}: Props) => {
  return (
    <FormControl>
      <InputLabel id="language-select-label">Languages</InputLabel>
      <Select
        MenuProps={{
          PaperProps: {
            sx: {
              maxHeight: 300,
              overflowY: "auto",
              maxWidth: 300,
            },
          },
        }}
        labelId="language-select-label"
        label="Languages"
        multiple
        value={selectedLanguages}
        onChange={handleChangeLanguage}
        renderValue={(selected) =>
          `${selected.length}/${numberOfTexts} selected`
        }
      >
        <MenuItem disabled>
          <Typography variant="body2">
            Selected: {selectedLanguages.length}/{numberOfTexts}
          </Typography>
        </MenuItem>

        {languages?.map((lang) => (
          <MenuItem
            key={lang}
            value={lang}
            disabled={
              selectedLanguages.length >= numberOfTexts &&
              !selectedLanguages.includes(lang)
            }
          >
            <Checkbox checked={selectedLanguages.includes(lang)} />
            <ListItemText primary={lang} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
