import {
  StyledFlexBox,
  StyledHeaderWrapper,
  StyledLanguageWrapper,
  StyledLogo,
} from "./styled";
import { Container, Stack } from "@mui/material";

import logo from "/images/logo.svg";
import Navlinks from "./Navlinks";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignUpButton";
import LanguageSelector from "../LanguageSelector";
import BurgerIcon from "../BurgerIcon";
import BurgerMenu from "../BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <StyledHeaderWrapper>
      <Container maxWidth="md">
        <StyledFlexBox>
          <StyledLogo sx={{ cursor: "pointer" }} src={logo} alt="logo" />

          <Navlinks />

          <StyledLanguageWrapper>
            <LanguageSelector />
          </StyledLanguageWrapper>

          <StyledFlexBox
            sx={{
              gap: 2,
            }}
          >
            <Stack
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <LoginButton />
              <SignUpButton />
            </Stack>

            <BurgerIcon handleOpen={handleOpen} />
          </StyledFlexBox>
        </StyledFlexBox>
      </Container>
      <BurgerMenu isOpen={isOpen} handleClose={handleClose} />
    </StyledHeaderWrapper>
  );
};

export default Header;
