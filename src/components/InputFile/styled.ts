import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)(() => ({
  display: "none",
}));

export const StyledAddImageButton = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(5, 5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "12px",
  background: "transparent",
  border: "1px solid transparent",
  backgroundImage: `
        linear-gradient(#0f021c,rgb(27, 8, 46)),
        linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
      `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  cursor: "pointer",
}));
