import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  minHeight: "100vh",
  padding: theme.spacing(2, 1.5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const StyledGenerationBlock = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: "24px",
  minHeight: "200px",
  padding: theme.spacing(3, 4),
  boxSizing: "border-box",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: 700,
}));

export const StyledInputsBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: "300px",
  width: "100%",
}));
