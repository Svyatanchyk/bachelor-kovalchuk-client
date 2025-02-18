import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  backgroundColor: theme.palette.grey[400],
  padding: "8px",
  borderRadius: "4px",
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%)",
  left: "16px",
}));
