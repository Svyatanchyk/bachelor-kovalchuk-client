import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "15px",
  color: theme.palette.common.white,
  fontSize: "0.875rem",
  textTransform: "capitalize",
  padding: theme.spacing(1),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1, 3),
    fontSize: "0.875rem",
  },

  background: "transparent",
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#0f021c, #0f021c), linear-gradient(to right, #A52BBE, #ED92FF, #A52BBE)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  transition: "color 0.3s ease, box-shadow 0.3s ease",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(to bottom, rgba(165, 43, 190, 0.2), rgba(237, 146, 255, 0.2))",
    opacity: 0,
    transition: "opacity 0.4s ease",
    zIndex: 0,
  },

  "&:hover::before": {
    opacity: 1,
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },

  "&:hover": {
    boxShadow: "0 0 12px rgba(237, 146, 255, 0.2)",
    fontWeight: "700",
  },
}));
