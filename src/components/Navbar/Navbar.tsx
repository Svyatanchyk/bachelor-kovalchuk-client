import {
  StyledButton,
  StyledButtonsContainer,
  StyledFlexBox,
  StyledNavbarWrapper,
} from "./styled";
import Profile from "../Profile";
import { Container } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

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

          {isAuthenticated && <Profile />}
        </StyledFlexBox>
      </Container>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
