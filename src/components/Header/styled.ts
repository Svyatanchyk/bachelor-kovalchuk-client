import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHeaderWrapper = styled("header")(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(5),
  color: "#D6B3FF",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(to right, rgba(165, 43, 190, 0), rgb(88, 7, 104), rgba(165, 43, 190, 0))",
  },
}));

export const StyledLogo = styled("img")(() => ({}));

export const StyledFlexBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StyledLanguageWrapper = styled(Box)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up(1024)]: {
    display: "flex",
  },
}));
