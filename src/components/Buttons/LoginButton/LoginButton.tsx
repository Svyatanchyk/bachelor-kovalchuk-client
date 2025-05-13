import { StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";
const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate("/signin")}>Увійти</StyledButton>
  );
};

export default LoginButton;
