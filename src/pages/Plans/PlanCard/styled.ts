import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(5),
  overflow: "hidden",
  backgroundColor: "transparent",

  border: "2px solid transparent",

  backgroundImage: `
      linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
      linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  borderRadius: "30px",
  cursor: "pointer",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },
}));
