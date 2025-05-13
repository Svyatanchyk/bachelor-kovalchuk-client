import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBuyCreditsBox = styled(Box)(({ theme }) => ({
  maxWidth: "400px",
  margin: "auto",
  padding: theme.spacing(10, 0),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: theme.spacing(8),
  background: "linear-gradient(to right, #D6B3FF, #F3EBFE)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "600",
}));

export const StyledFlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledTypographyLabel = styled(Typography)(() => ({
  background: "linear-gradient(to right, #D6B3FF, #F3EBFE)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  fontSize: "2rem",
}));

export const StyledCoinIcon = styled("img")(() => ({}));
