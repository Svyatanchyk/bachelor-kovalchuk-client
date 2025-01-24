import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSignInWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

export const StyledSignInContainer = styled(Box)(() => ({
  display: "flex",
  maxWidth: "400px",
  width: "100%",
  flexDirection: "column",
}));

export const StyledSignInTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(2),
}));

export const StyledSignInForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));
