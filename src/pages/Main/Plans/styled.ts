import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

export const StyledPlansWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(7.5, 0),
  background: "rgba(9, 0, 15, 0.76)",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(15, 0),
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: 600,
  fontFamily: "Montserrat, sans-serif",

  color: "#F3EBFE",
  marginBottom: theme.spacing(6),

  [theme.breakpoints.up("sm")]: {
    fontSize: "2.25rem",
  },
}));

export const StyledGridWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(0, 0),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 12),
  },
}));

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  borderRadius: "36px",

  padding: theme.spacing(5.62, 3),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5.62),
  },

  border: "2px solid transparent",

  backgroundImage: `
      linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  transition: "all 0.3s ease",
  "&:hover": {
    backgroundImage: `
      linear-gradient(#0f021c, #0f021c), 
      linear-gradient(to right, rgb(213, 1, 255), rgb(175, 90, 195), rgb(212, 0, 255))`,
    transform: "scale(1.01)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export const StyledGridItemTitle = styled(Typography)(({ theme }) => ({
  color: "#F3EBFE",
  fontSize: "1.5rem",
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  fontFamily: "Montserrat, sans-serif",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.75rem",
    marginBottom: theme.spacing(2),
  },
}));

export const StyledGridItemSubTitle = styled(Typography)(({ theme }) => ({
  color: "#9256A1",
  fontSize: "1.175rem",
  marginBottom: theme.spacing(3),
  fontFamily: "Montserrat, sans-serif",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.375rem",
    marginBottom: theme.spacing(5),
  },
}));

export const StyledGridItemPrice = styled(Typography)(({ theme }) => ({
  color: "#F3EBFE",
  fontSize: "2.375rem",
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  fontFamily: "Montserrat, sans-serif",

  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    marginBottom: theme.spacing(5),
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
}));

export const StyledImg = styled("img")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    position: "absolute",
    display: "block",
    bottom: -87,
    left: -72,
    width: 300,
    height: "auto",
  },
}));
