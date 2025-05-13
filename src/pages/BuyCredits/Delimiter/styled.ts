import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledOrBox = styled(Box)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 auto",
  fontSize: "0.875rem",

  backgroundImage: `
  linear-gradient(#0f021c, #0f021c),
  linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  border: "2px solid transparent",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#D6B3FF",
  position: "relative",
  zIndex: 2,
}));

export const StyledLine = styled(Box)(() => ({
  zIndex: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "2px",
  background:
    "linear-gradient(to right, rgba(165, 43, 190, 0), rgb(88, 7, 104), rgba(165, 43, 190, 0))",
}));
