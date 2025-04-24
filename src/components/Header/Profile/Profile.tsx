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

const Profile = () => {
  return (
    <StyledProfile>
      <Box>
        <StyledProfileNickname>Ostap</StyledProfileNickname>
        <StyledCoinsBox>
          <StyledCoinIcon src={coinIcon} alt="coin icon" />
          <StyledProfileCoins>24.262</StyledProfileCoins>
        </StyledCoinsBox>
      </Box>
      <StyledProfileIcon src={profielcon} alt="Lama icon" />
    </StyledProfile>
  );
};

export default Profile;
