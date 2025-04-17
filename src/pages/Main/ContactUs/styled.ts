import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContactUsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(21.875),
    paddingBottom: theme.spacing(21.875),
  },
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: "40rem",
  margin: "0 auto",
  padding: theme.spacing(0, 2),
  boxSizing: "border-box",

  [theme.breakpoints.up(450)]: {
    padding: theme.spacing(0, 8),
  },

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 12),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 6),
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
    marginBottom: theme.spacing(4),
    fontSize: "2.25rem",
  },
}));

export const StyledImg = styled("img")(({ theme }) => ({
  position: "absolute",

  top: -74,
  right: -95,
  width: 150,
  height: "auto",
  display: "none",

  [theme.breakpoints.up(450)]: {
    display: "block",
  },

  [theme.breakpoints.up("sm")]: {
    top: -140,
    right: -150,
    width: 240,
    height: "auto",
  },
}));
