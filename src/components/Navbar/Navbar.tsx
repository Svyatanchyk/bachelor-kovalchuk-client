import { Box } from "@mui/material";
import {
  StyledButtonsContainer,
  StyledNavbarWrapper,
  StyledSignInButton,
  StyledSignUpButton,
} from "./styled";

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <Box>
        <StyledButtonsContainer>
          <StyledSignUpButton to="signup">Sign up</StyledSignUpButton>
          <StyledSignInButton to="signin">Sign in</StyledSignInButton>
          <StyledSignInButton to="editor">Editor</StyledSignInButton>
          <StyledSignInButton to="generate-creative">
            Generate Creative
          </StyledSignInButton>
        </StyledButtonsContainer>
      </Box>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
