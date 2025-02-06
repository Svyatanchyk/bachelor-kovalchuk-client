import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCanvasSettings = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  padding: "24px 8px",
  borderRadius: "4px",
  textAlign: "left",
  "&:empty": {
    padding: 0,
  },
}));
