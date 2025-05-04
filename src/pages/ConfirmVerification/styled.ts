import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledConfirmVerificationWrapper = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "300px",
  margin: "0 auto",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "5px",
  padding: theme.spacing(1, 3),
  fontSize: "1rem",
  color: theme.palette.primary.main,
  fontWeight: 700,
  textTransform: "uppercase",
  marginTop: theme.spacing(2),
}));
