import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "15px",
    background: "transparent",
    border: "1px solid transparent",
    backgroundImage: `
          linear-gradient(#0f021c, #0f021c),
          linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
        `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    padding: theme.spacing(1, 1.5),
    color: theme.palette.common.white,
    width: "100%",
    fontFamily: "Montserrat Alternates, sans-serif",

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(1.5, 2),
    },
  },
  "& .MuiInputBase-input": {
    color: theme.palette.common.white,
    fontSize: "0.875rem",
    padding: 0,
    background: "transparent",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
  "& .MuiInputBase-root.Mui-focused": {
    boxShadow: "0 0 8px rgba(237, 146, 255, 0.2)",
  },
  "&:hover .MuiInputBase-root": {
    boxShadow: "0 0 8px rgba(237, 146, 255, 0.4)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
