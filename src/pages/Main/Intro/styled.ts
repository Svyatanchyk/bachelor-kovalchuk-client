import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";

export const StyledIntroWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(10),
  paddingTop: theme.spacing(10),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "1.175rem",
  textAlign: "center",
  color: "#F3EBFE",
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  fontFamily: "Montserrat, sans-serif",

  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  textAlign: "center",
  fontWeight: 600,
  textTransform: "capitalize",
  marginBottom: theme.spacing(5),
  fontFamily: "Montserrat, sans-serif",

  background: `linear-gradient(45deg, #F3EBFE, #D6B3FF)`,
  WebkitBackgroundClip: "text",
  color: "transparent",

  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}));

export const StyledButtonsBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 3,
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  maxWidth: "500px",
  margin: "0 auto",

  marginBottom: theme.spacing(10),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(15),
  },

  [theme.breakpoints.up("lg")]: {
    marginBottom: theme.spacing(20),
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "15px",
  padding: theme.spacing(2, 1),
  textTransform: "capitalize",
  fontSize: "0.75rem",
  width: "100%",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
  border: "1px solid transparent",
  color: theme.palette.common.white,
  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    fontSize: "0.9rem",
  },

  backgroundImage: `
      linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.01)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export const StyledVideoBox = styled(Box)(() => ({
  position: "relative",
}));

export const StyledBgImage = styled("img")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
  maxWidth: "1500px",
  width: "100%",
}));

export const StyledReactPlayer = styled(ReactPlayer)(() => ({
  position: "relative",
  zIndex: 2,
  borderRadius: "24px",
  overflow: "hidden",

  border: "1px solid transparent",
  backgroundImage: `
  linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
  linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
}));

export const StyledPlayButton = styled(Button)(() => ({
  position: "absolute",
  zIndex: 5,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1.2rem",
  width: 70,
  height: 70,
  borderRadius: "50%",
  backgroundColor: "#7816FF",
  color: "#fff",
  cursor: "pointer",
}));

export const StyledImageWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledLamaImage = styled("img")(({ theme }) => ({
  width: 120,

  [theme.breakpoints.up("sm")]: {
    width: 180,
  },

  [theme.breakpoints.up("md")]: {
    width: 250,
  },
}));
export const StyledImageTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.common.white,
  textAlign: "center",
  fontWeight: 600,
  textTransform: "uppercase",

  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
}));

export const StyledArrowImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: 50,

  [theme.breakpoints.up("sm")]: {
    width: 80,
  },

  [theme.breakpoints.up("md")]: {
    width: 100,
  },
}));
