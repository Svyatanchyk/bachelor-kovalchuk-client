import { Box } from "@mui/material";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledNavbarWrapper,
} from "./styled";

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <Box>
        <StyledButtonsContainer>
          <StyledButton to="signup">Sign up</StyledButton>
          <StyledButton to="signin">Sign in</StyledButton>
          <StyledButton to="editor">Editor</StyledButton>
          <StyledButton to="generate-creative">Generate Creative</StyledButton>
        </StyledButtonsContainer>
      </Box>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
