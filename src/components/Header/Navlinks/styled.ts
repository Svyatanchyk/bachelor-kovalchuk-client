import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const StyledNavlinksWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  gap: theme.spacing(4),
  alignItems: "center",

  [theme.breakpoints.up(1024)]: {
    display: "flex",
  },
}));

export const StyledLink = styled(NavLink)<{ isActive: boolean }>(
  ({ isActive }) => ({
    color: "#D6B3FF",
    textDecoration: "none",
    fontSize: "0.875rem",
    fontWeight: isActive ? 700 : 400,
    transition: "0.3s linear",

    "&:hover": {
      fontWeight: 700,
    },
  })
);
