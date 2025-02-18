import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCanvasWrapper = styled(Box)(({ theme }) => ({
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: theme.spacing(12, 2),
  backgroundColor: theme.palette.grey[200],
  minHeight: "100vh",
  height: "100%",
}));
