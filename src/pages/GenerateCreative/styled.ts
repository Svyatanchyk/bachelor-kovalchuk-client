import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  minHeight: "100vh",
  padding: theme.spacing(4, 1.5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const StyledGenerationBlock = styled(Box)(() => ({
  borderRadius: "24px",
  minHeight: "200px",
  boxSizing: "border-box",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#D6B3FF",
}));

export const StyledInputsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
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
  padding: theme.spacing(5, 3),
}));
