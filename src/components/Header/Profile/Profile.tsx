import { Box } from "@mui/material";
import {
  StyledCoinIcon,
  StyledCoinsBox,
  StyledProfile,
  StyledProfileCoins,
  StyledProfileIcon,
  StyledProfileNickname,
} from "./styled";

import profielcon from "/images/header/profile.svg";
import coinIcon from "/images/header/coin.svg";
import { useUser } from "../../../context/UserContext";

const Profile = () => {
  const { user } = useUser();

  return (
    <StyledProfile>
      <Box>
        <StyledProfileNickname>{user?.nickname}</StyledProfileNickname>
        <StyledCoinsBox>
          <StyledCoinIcon src={coinIcon} alt="coin icon" />
          <StyledProfileCoins>{user?.tokenBalance}</StyledProfileCoins>
        </StyledCoinsBox>
      </Box>
      <StyledProfileIcon src={profielcon} alt="Lama icon" />
    </StyledProfile>
  );
};

export default Profile;
