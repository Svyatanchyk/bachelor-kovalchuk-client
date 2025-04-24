import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFeaturesWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(5, 0),
  background: "rgba(9, 0, 15, 0.55)",
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(15, 0),
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.375rem",
  fontWeight: 600,
  fontFamily: "Montserrat, sans-serif",

  color: "#F3EBFE",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(6),

    fontSize: "2rem",
  },
}));
