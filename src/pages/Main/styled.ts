import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import background from "/images/background.jpg";

export const StyledMainWrapper = styled(Box)(() => ({
  width: "100%",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "300vh",
  fontFamily: "Montserrat Alternates, sans-serif",
}));
