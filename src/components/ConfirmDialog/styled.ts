import { Dialog, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  maxWidth: "500px",
  margin: "0 auto",

  "& .MuiDialog-paper": {
    padding: theme.spacing(2, 3),
    borderRadius: "24px",
    border: "2px solid transparent",
    backgroundImage: `
    linear-gradient(180deg, rgba(19, 0, 31, 0.95) 30%, rgba(50, 8, 73, 0.95) 100%),
    linear-gradient(to right, rgb(90, 28, 103), rgb(47, 19, 53), rgb(99, 44, 110))`,

    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
  },
}));

export const StyledDialogTypography = styled(DialogTitle)(({ theme }) => ({
  fontSize: "1.3rem",
  fontWeight: "700",
  color: theme.palette.common.white,
  padding: theme.spacing(0),

  background: "linear-gradient(to right, #D6B3FF, #F3EBFE)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
  textTransform: "capitalize",
}));
