import { Box, Container, Typography } from "@mui/material";
import {
  StyledButton,
  StyledCoinIcon,
  StyledCoinsBox,
  StyledFlexBox,
  StyledInfo,
  StyledProfileCoins,
  StyledProfileImage,
  StyledProfileNickname,
  StyledProfileSettings,
  StyledProfileWrapper,
  StyledTypography,
} from "./styled";

import profileImg from "/images/profile/profile.svg";
import coinIcon from "/images/header/coin.svg";

import { useUser } from "../../context/UserContext";
import Input from "../../components/Input";
import Button from "../../components/Buttons/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../services/logout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logout,
  });

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    mutate();
    navigate("/");
  };

  return (
    <StyledProfileWrapper>
      <Container maxWidth="md">
        <StyledTypography sx={{ textAlign: "center" }}>
          Профіль
        </StyledTypography>
        <StyledFlexBox>
          <StyledProfileSettings>
            <Box
              sx={{
                display: "flex",
                gap: 5,
                alignItems: "center",
                mb: 7,
              }}
            >
              <StyledProfileImage src={profileImg} alt="Profile image" />
              <Box>
                <StyledProfileNickname>{user?.nickname}</StyledProfileNickname>
                <StyledCoinsBox>
                  <StyledCoinIcon src={coinIcon} alt="coin icon" />
                  <StyledProfileCoins>{user?.tokenBalance}</StyledProfileCoins>
                </StyledCoinsBox>
              </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Button
                sx={{ py: 0.2, fontSize: "0.875rem" }}
                onClick={handleLogout}
              >
                Вийти
              </Button>
            </Box>

            <Box
              sx={{
                mb: 10,
              }}
            >
              <Box sx={{ mb: 2 }}>
                <StyledTypography
                  sx={{
                    fontSize: "1.3rem",
                    mb: 1,
                  }}
                >
                  Ваша пошта
                </StyledTypography>
                <Typography
                  sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 1 }}
                >
                  Пошту неможливо змінити
                </Typography>
                <Input type="email" value={user?.email} disabled={true} />
              </Box>

              <Box>
                <StyledTypography
                  sx={{
                    fontSize: "1.3rem",
                    mb: 1,
                  }}
                >
                  Ваш нікнейм
                </StyledTypography>
                <Input type="text" value={user?.nickname} />
              </Box>
            </Box>

            <Box sx={{ mt: "auto" }}>
              <StyledButton sx={{ mb: 2, color: "#E5D0FE" }}>
                Змінити пароль
              </StyledButton>
              <Button onClick={() => {}}>Зберегти зміни</Button>
            </Box>
          </StyledProfileSettings>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              width: "100%",
            }}
          >
            <StyledInfo>
              <Box>
                <Typography
                  sx={{
                    color: "#F3EBFE",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                  }}
                >
                  Історія креативів
                </Typography>
                <Typography
                  sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 1 }}
                >
                  Креативів створено 243{" "}
                </Typography>

                <StyledButton
                  startIcon={<AccessTimeIcon />}
                  sx={{ maxWidth: "300px", color: "#E5D0FE" }}
                >
                  Переглянути історію
                </StyledButton>
              </Box>
            </StyledInfo>

            <StyledInfo>
              <Box sx={{ mb: 3 }}>
                <StyledTypography
                  sx={{
                    fontSize: "1.3rem",
                    mb: 0,
                  }}
                >
                  Зв’язатись з підтримкою
                </StyledTypography>

                <Typography
                  sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 2 }}
                >
                  Якщо у вас виникли питання стосовно вашого аккаунта, зв’яжіть
                  з нами
                </Typography>

                <StyledButton
                  startIcon={<LocalPhoneIcon />}
                  sx={{ maxWidth: "300px", color: "#E5D0FE" }}
                >
                  Зв’язатись з нами
                </StyledButton>
              </Box>

              <Box>
                <StyledTypography
                  sx={{
                    fontSize: "1.3rem",
                    mb: 0,
                  }}
                >
                  Видалити аккаунт
                </StyledTypography>

                <Typography
                  sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 2 }}
                >
                  Видалення вашого облікового запису призведе до видалення всієї
                  вашої інформації з нашої бази даних. Це неможливо скасувати.
                </Typography>

                <StyledButton
                  startIcon={<DeleteIcon />}
                  sx={{ maxWidth: "300px", color: "#E5D0FE" }}
                >
                  Видалити аккаунт
                </StyledButton>
              </Box>
            </StyledInfo>
          </Box>
        </StyledFlexBox>
      </Container>
    </StyledProfileWrapper>
  );
};

export default Profile;
