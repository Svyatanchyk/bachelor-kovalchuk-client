import { StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";

const SignUpButton = () => {
  const navigate = useNavigate();
  return (
    <StyledButton onClick={() => navigate("/signup")}>Sign Up</StyledButton>
  );
};

export default SignUpButton;
