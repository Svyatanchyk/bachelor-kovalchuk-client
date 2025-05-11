import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "250px",
  backgroundColor: "rgba(9,0,15,1)",
  height: "100vh",
  padding: theme.spacing(2, 2),
}));

export const StyledNavlink = styled(NavLink)(() => ({
  textDecoration: "none",
}));
