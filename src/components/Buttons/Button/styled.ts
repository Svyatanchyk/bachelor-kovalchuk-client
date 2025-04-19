import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to right, #8F3FFF, #7816FF)",
  color: theme.palette.common.white,
  borderRadius: "15px",
  padding: theme.spacing(1.5, 0),
  textTransform: "capitalize",
  fontSize: "1rem",
  width: "100%",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
}));
