import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBurgerMenu = styled(Box)(() => ({}));

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "250px",
  backgroundColor: "rgba(9,0,15,1)",
  height: "100vh",
  padding: theme.spacing(2, 2),
}));
