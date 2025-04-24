import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledSignInWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(10, 0),
}));

export const StyledSignInContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "400px",
  width: "100%",
  flexDirection: "column",
  padding: theme.spacing(0, 2),
}));

export const StyledSignInTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: theme.spacing(7),
  color: "#F3EBFE",

  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
}));

export const StyledGoogleButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  padding: theme.spacing(1.5, 2),
  textTransform: "capitalize",
  width: "100%",
  fontFamily: "Montserrat, sans-serif",
  border: "1px solid transparent",
  color: theme.palette.common.white,
  cursor: "pointer",
  display: "flex",
  justifyContent: "flex-start",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },

  marginBottom: theme.spacing(5),

  backgroundImage: `
      linear-gradient(#0f021c, #0f021c),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export const StyledSignInForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledForgotPasswordLink = styled(Link)(({ theme }) => ({
  color: "#973DFF",
  display: "flex",
  fontWeight: 600,
  justifyContent: " center",
  fontSize: "0.75rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "0.875rem",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  padding: theme.spacing(1),
  textTransform: "capitalize",
  fontSize: "0.875rem",
  width: "100%",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
  border: "1px solid transparent",
  color: theme.palette.common.white,
  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1.5, 1),
    fontSize: "1rem",
  },

  backgroundImage: `
      linear-gradient(to right, #7816FF14 30%, #8F3FFF4D 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export const StyledOrBox = styled(Box)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 auto",
  fontSize: "0.875rem",

  backgroundImage: `
  linear-gradient(#0f021c, #0f021c),
  linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  border: "2px solid transparent",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#D6B3FF",
  position: "relative",
  zIndex: 2,
}));

export const StyledLine = styled(Box)(() => ({
  zIndex: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "2px",
  background:
    "linear-gradient(to right, rgba(165, 43, 190, 0), rgb(88, 7, 104), rgba(165, 43, 190, 0))",
}));
