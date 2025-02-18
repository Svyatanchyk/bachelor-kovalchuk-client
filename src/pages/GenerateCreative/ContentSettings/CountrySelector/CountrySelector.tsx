import { Autocomplete, TextField } from "@mui/material";
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
    <Autocomplete
      onChange={handleChangeCountry}
      disablePortal
      value={selectedCountry}
      options={countries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
};

export default CountrySelector;
