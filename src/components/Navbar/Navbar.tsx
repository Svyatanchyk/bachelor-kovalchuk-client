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
        </StyledButtonsContainer>
      </Box>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
