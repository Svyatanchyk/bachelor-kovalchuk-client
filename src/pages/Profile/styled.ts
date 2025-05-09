import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProfileWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: "transparent",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  fontSize: "2rem",
  fontWeight: 600,
  fontFamily: "Montserrat Alternates, sans-serif",
  marginBottom: theme.spacing(2),
  background: "linear-gradient(to right, #D6B3FF, #F3EBFE)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(5),
  width: "100%",
}));

export const StyledProfileSettings = styled(Box)(({ theme }) => ({
  width: "70%",
  borderRadius: "32px",
  border: "2px solid transparent",
  backgroundImage: `
    linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
    linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  padding: theme.spacing(4, 4),
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

export const StyledProfileImage = styled("img")(() => ({
  width: 100,
}));

export const StyledCoinIcon = styled("img")(() => ({
  width: 25,
}));

export const StyledCoinsBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  display: "flex",
  gap: theme.spacing(0.5),
  borderRadius: "16px",
  fontSize: "1.2rem",
  fontWeight: 600,

  border: "1px solid transparent",

  backgroundImage: `
      linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
}));

export const StyledProfileCoins = styled(Typography)(({ theme }) => ({
  color: "#E669FF",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
}));

export const StyledProfileNickname = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginBottom: theme.spacing(0.5),
  color: "#D6B3FF",
  fontSize: "0.7rem",

  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "initial",
  borderRadius: "15px",
  background: "transparent",
  border: "2px solid transparent",
  backgroundImage: `
          linear-gradient(#0f021c, #0f021c),
          linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
        `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  padding: theme.spacing(1, 1.5),
  color: theme.palette.common.white,
  width: "100%",
  fontSize: "1rem",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1.5, 2),
  },

  "& .MuiButton-startIcon": {
    "& svg": {
      fontSize: "1.7rem",
    },
  },
}));

export const StyledInfo = styled(Box)(({ theme }) => ({
  borderRadius: "32px",
  border: "2px solid transparent",
  backgroundImage: `
      linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  padding: theme.spacing(4, 4),
}));
