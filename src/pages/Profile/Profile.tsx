import { Container } from "@mui/material";
import {
  StyledFlexBox,
  StyledProfileWrapper,
  StyledTypography,
} from "./styled";

import { useUser } from "../../context/UserContext";

import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import ProfileInfo from "./ProfileInfo";
import ProfileActions from "./ProfileActions";

const Profile = () => {
  const { resetUser, setIsAuthenticated } = useUser();
  const navigate = useNavigate();

  const { mutate } = useLogout();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    mutate();
    resetUser();
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <StyledProfileWrapper>
      <Container maxWidth="md">
        <StyledTypography sx={{ textAlign: "center" }}>
          Профіль
        </StyledTypography>

        <StyledFlexBox>
          <ProfileInfo handleLogout={handleLogout} />
          <ProfileActions />
        </StyledFlexBox>
      </Container>
    </StyledProfileWrapper>
  );
};

export default Profile;
