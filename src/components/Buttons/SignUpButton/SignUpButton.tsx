import { StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => navigate("/signup")}>
      Зареєструватися
    </StyledButton>
  );
};

export default SignUpButton;
