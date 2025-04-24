import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

export const StyledCardWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: "30px",
  padding: theme.spacing(3, 3),

  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(5),
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

export const StyledFlexBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1.5),
  background: "transparent",

  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(3),
  },
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
  fontSize: "0.9rem",
  fontFamily: "Montserrat Alternates, sans-serif",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
  color: "#9256A1",
  fontSize: "0.8rem",
  fontFamily: "Montserrat Alternates, sans-serif",
  fontWeight: 300,

  [theme.breakpoints.up("lg")]: {
    maxWidth: "300px",
    fontSize: "1rem",
  },
}));
