import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCanvasSettings = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2.5),
  maxWidth: "250px",
  width: "100%",

  borderRadius: "24px",
  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  "&:empty": {
    padding: 0,
  },

  maxHeight: "80vh",
  overflowY: "auto",

  scrollbarWidth: "none",
  "-ms-overflow-style": "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
