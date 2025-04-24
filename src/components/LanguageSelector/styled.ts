import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  width: "100%",
  background: "transparent",
  border: "2px solid transparent",
  backgroundImage: `
    linear-gradient(#0f021c, #0f021c),
    linear-gradient(to right, #A52BBE, #ED92FF, #A52BBE)
  `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "15px",
  cursor: "pointer",
  height: "30px",

  "& .MuiSelect-select": {
    paddingLeft: theme.spacing(1),
    paddingRight: 0,
    fontSize: "0.875rem",
    whiteSpace: "normal",
    overflow: "visible",
    fontWeight: "600",
    textOverflow: "clip",
  },

  "& .MuiSelect-root": {
    color: "#e1c9ff",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(0),
  },

  "& .MuiSelect-root:focus": {
    border: "none",
  },

  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
}));
