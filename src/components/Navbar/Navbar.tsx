import {
  StyledButton,
  StyledButtonsContainer,
  StyledFlexBox,
  StyledNavbarWrapper,
} from "./styled";
import Profile from "../Profile";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <Container maxWidth="lg">
        <StyledFlexBox>
          <StyledButtonsContainer>
            <StyledButton to="signup">Sign up</StyledButton>
            <StyledButton to="signin">Sign in</StyledButton>
            <StyledButton to="editor">Editor</StyledButton>
            <StyledButton to="generate-creative">
              Generate Creative
            </StyledButton>
          </StyledButtonsContainer>

          <Profile />
        </StyledFlexBox>
      </Container>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
