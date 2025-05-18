import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import { StyledBox, StyledNavlink } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignUpButton";
import Profile from "../Header/Profile";
import { links } from "./links";
import { useUser } from "../../context/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import Button from "../Buttons/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const BurgerMenu = ({ isOpen, handleClose }: Props) => {
  const { isAuthenticated, resetUser, setIsAuthenticated } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { mutate } = useLogout();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    mutate();
    resetUser();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <Box>
      <Drawer anchor="right" open={isOpen} onClose={handleClose}>
        <StyledBox>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
            {isAuthenticated && (
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Profile />
              </Box>
            )}

            <IconButton onClick={handleClose} sx={{ color: "#D6B3FF" }}>
              <CloseIcon fontSize="medium" />
            </IconButton>
          </Box>

          <List
            sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
            disablePadding
          >
            {links.map((link, index) => (
              <StyledNavlink
                key={index + Date.now()}
                isActive={link.path === pathname}
                to={link.path}
              >
                <ListItem disablePadding sx={{ color: "#D6B3FF" }}>
                  {link.label}
                </ListItem>
              </StyledNavlink>
            ))}
          </List>

          {!isAuthenticated && (
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
          )}

          {isAuthenticated && (
            <Button
              sx={{ py: 0.6, fontSize: "0.875rem" }}
              onClick={handleLogout}
            >
              Вийти
            </Button>
          )}
          <Box></Box>
        </StyledBox>
      </Drawer>
    </Box>
  );
};

export default BurgerMenu;
