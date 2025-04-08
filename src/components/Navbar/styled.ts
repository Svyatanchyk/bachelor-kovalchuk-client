import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledNavbarWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
}));

export const StyledButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

export const StyledButton = styled(Link)(({ theme }) => ({
  borderRadius: "10px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  padding: theme.spacing(1, 2),
  textDecoration: "none",
}));

export const StyledFlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
