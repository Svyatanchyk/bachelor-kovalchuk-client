import {
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SyntheticEvent } from "react";

type Props = {
  selectedCountry: string | null;
  handleChangeCountry: (_: SyntheticEvent, value: string | null) => void;
  countries: string[];
};

const CountrySelector = ({
  selectedCountry,
  countries,
  handleChangeCountry,
}: Props) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel
        sx={{ position: "relative", top: -25, color: "#D6B3FF", left: -10 }}
        htmlFor="country-selector"
      >
        Країна
      </InputLabel>
      <Autocomplete
        id="country-selector"
        onChange={handleChangeCountry}
        disablePortal
        value={selectedCountry}
        options={countries}
        sx={{
          "& .MuiAutocomplete-inputRoot": {
            borderRadius: "24px",
            paddingRight: "30px",
            background: "transparent",
            border: "1px solid transparent",
            backgroundImage: `
              linear-gradient(#0f021c, #0f021c), 
              linear-gradient(to right,rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          },
          "& .MuiAutocomplete-popupIndicator svg": {
            color: "#d6b3ff",
            fontSize: "2.5rem",
          },

          "& .MuiOutlinedInput-root": {
            borderRadius: "16px",
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
          "& .MuiAutocomplete-clearIndicator": {
            display: "none",
          },
        }}
        renderInput={(params) => (
          <TextField
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "#c5a3eb",
              },
              "& .MuiInputBase-input": {
                color: "#c5a3eb",
              },
            }}
            {...params}
            placeholder="Впишіть або виберіть країну"
          />
        )}
      />
    </FormControl>
  );
};

export default CountrySelector;
