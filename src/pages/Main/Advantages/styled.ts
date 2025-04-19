import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAdvantagesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(7.5, 0),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(15, 0),
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: 600,
  fontFamily: "Montserrat Alternates, sans-serif",
  color: "#F3EBFE",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(6),
    fontSize: "2.25rem",
  },
}));

export const StyledGridWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 0),
  position: "relative",

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 3),
  },
}));

export const StyledImg = styled("img")(({ theme }) => ({
  position: "absolute",
  top: -85,
  left: 350,
  display: "none",

  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
}));
