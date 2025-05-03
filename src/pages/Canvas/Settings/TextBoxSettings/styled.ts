import { Autocomplete } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "#5B3B81",
    "&:focus": {
      outline: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1),
  },
}));
