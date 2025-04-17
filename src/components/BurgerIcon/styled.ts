import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#D6B3FF",
  display: "block",

  [theme.breakpoints.up(1024)]: {
    display: "none",
  },
}));
