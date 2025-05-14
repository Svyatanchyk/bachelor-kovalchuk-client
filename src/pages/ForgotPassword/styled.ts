import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFrogotPasswordWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: theme.spacing(0, 2),
}));

export const StyledFrogotPasswordContainer = styled(Box)(() => ({
  display: "flex",
  maxWidth: "400px",
  width: "100%",
  flexDirection: "column",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.common.white,
}));

export const StyledForgotPasswordForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: 26,

  border: "2px solid transparent",

  backgroundImage: `
      linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
}));
