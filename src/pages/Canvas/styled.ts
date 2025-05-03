import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCanvasWrapper = styled(Box)(({ theme }) => ({
  fontFamily: "sans-serif",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // flexDirection: "column",
  padding: theme.spacing(12, 2),
  // minHeight: "100vh",
  height: "100%",

  borderRadius: "24px",
  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
}));
