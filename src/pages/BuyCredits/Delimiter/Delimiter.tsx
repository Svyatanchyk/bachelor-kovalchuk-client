import { Box } from "@mui/material";
import { StyledLine, StyledOrBox } from "./styled";

const Delimiter = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <StyledOrBox>Або</StyledOrBox>
      <StyledLine />
    </Box>
  );
};

export default Delimiter;
