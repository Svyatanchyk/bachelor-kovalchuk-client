import { IconButton, Typography } from "@mui/material";
import { StyledProfileBox, StyledProfileWrapper } from "./styled";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";

const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const handleToogleProfile = () => setIsProfileOpen((prev) => !prev);

  return (
    <StyledProfileWrapper>
      <IconButton onClick={handleToogleProfile}>
        <ManageAccountsIcon fontSize="large" />
      </IconButton>

      <StyledProfileBox isProfileOpen={isProfileOpen}>
        <Typography sx={{ color: "#fff" }}>Profile information</Typography>
        <Typography sx={{ color: "#fff" }}>Change password</Typography>
        <Typography sx={{ color: "#fff" }}>Exit</Typography>
      </StyledProfileBox>
    </StyledProfileWrapper>
  );
};

export default Profile;
