import { Box, Typography } from "@mui/material";
import {
  StyledCoinIcon,
  StyledCoinsBox,
  StyledProfileCoins,
  StyledProfileImage,
  StyledProfileNickname,
  StyledProfileSettings,
  StyledTypography,
} from "../styled";
import Button from "../../../components/Buttons/Button";
import ChangePassword from "./ChangePassword";

import profileImg from "/images/profile/profile.svg";
import coinIcon from "/images/header/coin.svg";
import { useUser } from "../../../context/UserContext";
import Input from "../../../components/Input";
import { ChangeEvent, useState } from "react";
import { useUpdateUser } from "../../../hooks/useUpdateUser";

interface Props {
  handleLogout: () => void;
}

const ProfileInfo = ({ handleLogout }: Props) => {
  const { user } = useUser();
  const [nickname, setNickname] = useState<string>(() => user?.nickname || "");
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const { mutate: updateUserMutate } = useUpdateUser();

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    setIsChanged(true);
  };

  const handleUpdateNickname = () => {
    if (nickname.length) {
      updateUserMutate(nickname);
      setIsChanged(false);
    }
  };

  return (
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
        <Button sx={{ py: 0.6, fontSize: "0.875rem" }} onClick={handleLogout}>
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
          <Typography sx={{ color: "#6a39a5", fontSize: "0.9rem", mb: 1 }}>
            Пошту неможливо змінити
          </Typography>
          <Input type="email" value={user?.email as string} disabled={true} />
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
          <Input
            type="text"
            value={nickname}
            handleChange={handleChangeNickname}
          />
        </Box>
      </Box>

      <Box sx={{ mt: "auto" }}>
        {user?.provider === "local" && <ChangePassword />}
        <Button disabled={!isChanged} onClick={handleUpdateNickname}>
          Зберегти зміни
        </Button>
      </Box>
    </StyledProfileSettings>
  );
};

export default ProfileInfo;
