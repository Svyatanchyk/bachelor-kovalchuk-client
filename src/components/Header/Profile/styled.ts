import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledProfile = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "row-reverse",
    gap: theme.spacing(1),
  },
}));

export const StyledFlexBox = styled(Box)(() => ({}));

export const StyledProfileIcon = styled("img")(({ theme }) => ({
  width: "60px",
  cursor: "pointer",

  [theme.breakpoints.down("sm")]: {
    width: "50px",
  },
}));

export const StyledCoinIcon = styled("img")(() => ({}));

export const StyledCoinsBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  display: "flex",
  gap: theme.spacing(0.5),
  borderRadius: "16px",
  fontSize: "0.6rem",
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
  },
}));

export const StyledProfileNickname = styled(Typography)(({ theme }) => ({
  textAlign: "right",
  marginBottom: theme.spacing(0.5),
  color: "#D6B3FF",

  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
    fontSize: "0.7rem",
  },
}));
