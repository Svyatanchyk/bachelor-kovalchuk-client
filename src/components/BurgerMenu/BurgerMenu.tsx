import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import { StyledBox, StyledBurgerMenu } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import LanguageSelector from "../LanguageSelector";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignUpButton";
import Profile from "../Header/Profile";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const BurgerMenu = ({ isOpen, handleClose }: Props) => {
  return (
    <StyledBurgerMenu>
      <Drawer anchor="right" open={isOpen} onClose={handleClose}>
        <StyledBox>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Profile />
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "#D6B3FF" }}>
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Box>

          <List
            sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            disablePadding
          >
            <ListItem disablePadding sx={{ color: "#D6B3FF" }}>
              Підписки
            </ListItem>
            <ListItem disablePadding sx={{ color: "#D6B3FF" }}>
              Підписки
            </ListItem>
            <ListItem disablePadding sx={{ color: "#D6B3FF" }}>
              Підписки
            </ListItem>
            <ListItem disablePadding sx={{ color: "#D6B3FF" }}>
              Підписки
            </ListItem>
          </List>

          <Box
            sx={{
              mb: 4,
              display: {
                xs: "flex",
                sm: "none",
              },
              gap: 1,
            }}
          >
            <LoginButton />
            <SignUpButton />
          </Box>

          <Box>
            <LanguageSelector />
          </Box>
        </StyledBox>
      </Drawer>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
