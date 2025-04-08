import { IconButton } from "@mui/material";
import { StyledProfileWrapper } from "./styled";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const handleToogleProfile = () => setIsProfileOpen((prev) => !prev);

  return (
    <StyledProfileWrapper>
      <IconButton onClick={handleToogleProfile}>
        <ManageAccountsIcon fontSize="large" />
      </IconButton>

      <ProfileMenu isProfileOpen={isProfileOpen} />
    </StyledProfileWrapper>
  );
};

export default Profile;
