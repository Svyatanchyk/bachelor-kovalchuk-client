import { ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
}));

export const StyledListItemTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",

  color: "#D6B3FF",
  fontFamily: "Montserrat, sans-serif",

  [theme.breakpoints.up("md")]: {
    fontSize: "0.975rem",
  },
}));
