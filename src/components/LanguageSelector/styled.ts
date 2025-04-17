import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.common.white,
  width: "80px",
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
  height: "36px",
  paddingRight: theme.spacing(2),

  "& .MuiSelect-select": {
    paddingRight: 0,
    paddingLeft: theme.spacing(1.5),
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  },

  "& .MuiSelect-root": {
    color: "#e1c9ff",
    fontSize: "1.5rem",
    fontWeight: "600",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(0.5),
    justifyContent: "space-between",
  },

  "& .MuiSelect-icon": {
    fontSize: "1.8rem",
  },

  "& .MuiSelect-root:focus": {
    border: "none",
  },

  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
}));
