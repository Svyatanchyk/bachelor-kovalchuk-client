import { keyframes, styled } from "@mui/material/styles";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled("span")(() => ({
  width: "48px",
  height: "48px",
  border: "5px solid",
  borderColor: "#8F3FFF transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: `${rotation} 1s linear infinite`,
}));
