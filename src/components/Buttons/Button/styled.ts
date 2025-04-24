import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  cursor: "pointer",
  background: "linear-gradient(to right, #8F3FFF, #7816FF)",
  color: theme.palette.common.white,
  borderRadius: "15px",
  padding: theme.spacing(1.5, 1),
  textTransform: "capitalize",
  fontSize: "0.75rem",
  width: "100%",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",

  [theme.breakpoints.up("md")]: {
    fontSize: "0.9rem",
  },
}));
