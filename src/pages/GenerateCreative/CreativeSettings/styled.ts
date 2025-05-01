import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGenerationBlock = styled(Box)(() => ({
  backgroundColor: "transparent",
  borderRadius: "24px",
  minHeight: "200px",
  boxSizing: "border-box",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: 700,
}));

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
  alignItems: "flex-start",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const StyledConfigBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  width: "100%",

  [theme.breakpoints.up("md")]: {
    maxWidth: "350px",
    width: "100%",
  },

  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "24px",
  padding: theme.spacing(0, 3),
  paddingBottom: theme.spacing(3),
}));

export const StyledCreativesBox = styled(Box)(() => ({
  background: "transparent",
  width: "100%",
}));

interface StyledButtonProps {
  isActive?: boolean;
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
