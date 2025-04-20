import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import background from "/images/background.jpg";

export const StyledAppWrapper = styled(Box)(() => ({
  width: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
  fontFamily: "Montserrat, sans-serif",
}));
