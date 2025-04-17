import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContactUsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(21.875),
  paddingBottom: theme.spacing(21.875),
}));

export const StyledContainer = styled(Box)(() => ({
  maxWidth: "35rem",
  margin: "0 auto",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "2.25rem",
  fontWeight: 600,
  fontFamily: "Montserrat Alternates, sans-serif",
  color: "#F3EBFE",
  marginBottom: theme.spacing(4),
}));
