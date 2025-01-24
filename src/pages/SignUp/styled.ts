import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSignUpWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(0, 2),
}));

export const StyledSignUpContainer = styled(Box)(() => ({
  display: "flex",
  maxWidth: "400px",
  width: "100%",
  flexDirection: "column",
}));

export const StyledSignUpTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(2),
}));

export const StyledSignUpForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));
