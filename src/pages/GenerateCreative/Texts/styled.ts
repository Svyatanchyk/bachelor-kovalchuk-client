import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGeneratedTextBox = styled(Box)(({ theme }) => ({
  border: "1px solid #000",
  width: "100%",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}));
