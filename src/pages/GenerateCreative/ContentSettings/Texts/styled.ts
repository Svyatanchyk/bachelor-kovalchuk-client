import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledGeneratedTextBox = styled(Box)(({ theme }) => ({
  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "24px",
  padding: theme.spacing(5, 3),

  width: "100%",
}));

export const StyledTextElement = styled(Box)(({ theme }) => ({
  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c, #0f021c),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "16px",
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));
