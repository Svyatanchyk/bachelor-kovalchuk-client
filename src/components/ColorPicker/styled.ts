import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyleColorPickerWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  background: "transparent",
  border: "2px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  cursor: "pointer",
  overflow: "hidden",
}));
