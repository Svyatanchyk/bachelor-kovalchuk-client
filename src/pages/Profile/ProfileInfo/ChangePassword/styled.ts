import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "initial",
  borderRadius: "15px",
  background: "transparent",
  border: "2px solid transparent",
  backgroundImage: `
          linear-gradient(#0f021c, #0f021c),
          linear-gradient(to right,rgb(90, 28, 103),rgb(47, 19, 53),rgb(99, 44, 110))
        `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",

  padding: theme.spacing(1, 1.5),
  color: theme.palette.common.white,
  width: "100%",
  fontSize: "1rem",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(1.5, 2),
  },

  "& .MuiButton-startIcon": {
    "& svg": {
      fontSize: "1.7rem",
    },
  },
}));
