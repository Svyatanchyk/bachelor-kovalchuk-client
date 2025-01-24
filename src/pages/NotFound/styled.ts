import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.common.black,
  gap: theme.spacing(2),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "2rem",
  fontWeight: "bold",
}));

export const StyledButton = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  border: "1px solid white",
  padding: theme.spacing(1, 10),
  cursor: "pointer",
}));
