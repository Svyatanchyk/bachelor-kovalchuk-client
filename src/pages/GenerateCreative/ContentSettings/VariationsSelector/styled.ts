import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledVariationsBox = styled(Box)(() => ({}));
export const StyledVariationsTypography = styled(Typography)(({ theme }) => ({
  color: "#D6B3FF",
  marginBottom: theme.spacing(2),
}));

export const StyledButtonsBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: theme.spacing(1.5),

  [theme.breakpoints.up("md")]: {
    justifyContent: "space-between",
    gap: theme.spacing(0),
  },
}));

interface StyledButtonProps {
  isActive: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, isActive }) => ({
    overflow: "hidden",
    background: "transparent",
    borderRadius: "12px",
    border: "1px solid transparent",
    backgroundImage:
      "linear-gradient(#0f021c, #0f021c), linear-gradient(to right, #A52BBE, #ED92FF, #A52BBE)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    transition: "color 0.3s ease, box-shadow 0.3s ease",
    color: isActive ? theme.palette.common.white : "#5B3B81",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(to bottom, rgba(165, 43, 190, 0.2), rgba(237, 146, 255, 0.2))",
      opacity: isActive ? 1 : 0,
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
      color: theme.palette.common.white,
    },
  })
);
