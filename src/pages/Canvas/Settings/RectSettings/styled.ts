import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyleDimensionTextFieldBox = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
          linear-gradient(#0f021c, #0f021c),
          linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
        `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1.5),
}));

export const StyleDimensionTextField = styled(TextField)(({ theme }) => ({
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
