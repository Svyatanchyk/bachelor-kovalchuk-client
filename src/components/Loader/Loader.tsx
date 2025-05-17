import { Box } from "@mui/material";
import { StyledLoader } from "./styled";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <StyledLoader />
    </Box>
  );
};

export default Loader;
