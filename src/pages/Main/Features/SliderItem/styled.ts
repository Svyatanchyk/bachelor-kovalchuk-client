import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const StyledSliderItem = styled(Box)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(3, 2),

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 5),
  },

  display: "flex",
  flexDirection: "column",
  height: "100%",

  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
          linear-gradient(#0f021c, #0f021c),
          linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
        `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
}));

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  background: "transparent",
}));

export const StyledIcon = styled("img")(({ theme }) => ({
  width: "15px",
  height: "auto",

  [theme.breakpoints.up("lg")]: {
    width: "25px",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "#D6B3FF",
  fontWeight: 600,
  fontSize: "1rem",
  fontFamily: "Montserrat Alternates, sans-serif",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.3rem",
  },
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  color: "#9256A1",
  fontSize: "0.9rem",
  fontFamily: "Montserrat Alternates, sans-serif",
  fontWeight: 300,

  [theme.breakpoints.up("lg")]: {
    maxWidth: "300px",
    fontSize: "1.175rem",
  },
}));
