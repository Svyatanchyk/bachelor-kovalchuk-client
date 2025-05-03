import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledToolbar = styled(Box)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "column",
  padding: theme.spacing(4, 3),
  maxWidth: "250px",

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

export const StyledButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  marginBottom: theme.spacing(4),
}));

export const StyledButton = styled(Box)(({ theme }) => ({
  borderRadius: "10px",
  background: "transparent",
  border: "2px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  padding: theme.spacing(0.5, 2),
  cursor: "pointer",
}));
