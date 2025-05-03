// import { useMutation } from "@tanstack/react-query";
import { StyledProfileBox, StyledProfileMenuButton } from "./styled";
// import { logout } from "../../../services/logout";
// import { useNavigate } from "react-router-dom";

interface Props {
  isProfileOpen: boolean;
}

const ProfileMenu = ({ isProfileOpen }: Props) => {
  // const navigate = useNavigate();
  // const { mutate } = useMutation({
  //   mutationFn: logout,
  //   onSuccess: () => {
  //     navigate("/");
  //   },
  //   onError: () => {
  //     navigate("/");
  //   },
  // });

  return (
    <StyledProfileBox isProfileOpen={isProfileOpen}>
      <StyledProfileMenuButton>Profile information</StyledProfileMenuButton>
      <StyledProfileMenuButton>Change password</StyledProfileMenuButton>
      <StyledProfileMenuButton>Exit</StyledProfileMenuButton>
    </StyledProfileBox>
  );
};

export default ProfileMenu;
