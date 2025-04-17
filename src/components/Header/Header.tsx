import { StyledFlexBox, StyledHeaderWrapper, StyledLogo } from "./styled";
import { Box, Container, Stack } from "@mui/material";

import logo from "/images/logo.svg";
import Navlinks from "./Navlinks";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignUpButton";
import LanguageSelector from "../LanguageSelector";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Container maxWidth="lg">
        <StyledFlexBox>
          <StyledLogo sx={{ cursor: "pointer" }} src={logo} alt="logo" />
          <Navlinks />
          <LanguageSelector />
          <Stack direction="row" spacing={2}>
            <LoginButton />
            <SignUpButton />
          </Stack>
        </StyledFlexBox>
      </Container>
    </StyledHeaderWrapper>
  );
};

export default Header;
