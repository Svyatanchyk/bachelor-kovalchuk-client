import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFotterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: "rgba(9,0,15,0.76)",
  color: "#D6B3FF",
  paddingTop: theme.spacing(5),
  fontFamily: "Montserrat Alternates, sans-serif",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#F3EBFE",
  fontWeight: 600,
  fontSize: "1rem",
  marginBottom: theme.spacing(2),
  fontFamily: "Montserrat Alternates, sans-serif",

  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
  },
}));

export const StyledGridWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(5, 0),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(10, 0),
  },

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

export const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  paddingTop: 0,
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  fontSize: "0.875rem",

  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
}));
