import { StyledFlexBox, StyledHeaderWrapper, StyledLogo } from "./styled";
import { Box, Container, Stack } from "@mui/material";

import logo from "/images/logo.svg";
import Navlinks from "./Navlinks";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignUpButton";
import BurgerIcon from "../BurgerIcon";
import BurgerMenu from "../BurgerMenu";
import { useState } from "react";
import Profile from "./Profile";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { isAuthenticated } = useUser();

  return (
    <StyledHeaderWrapper>
      <Container maxWidth="lg">
        <StyledFlexBox>
          <StyledLogo sx={{ cursor: "pointer" }} src={logo} alt="logo" />

          <Navlinks />

          <StyledFlexBox
            sx={{
              gap: 2,
            }}
          >
            {isAuthenticated ? (
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Profile />
              </Box>
            ) : (
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
            )}

            <BurgerIcon handleOpen={handleOpen} />
          </StyledFlexBox>
        </StyledFlexBox>
      </Container>
      <BurgerMenu isOpen={isOpen} handleClose={handleClose} />
    </StyledHeaderWrapper>
  );
};

export default Header;
