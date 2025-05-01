import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  marginTop: theme.spacing(2),
  alignItems: "start",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
