import { useNavigate } from "react-router-dom";
import { StyledWrapper, StyledTypography, StyledButton } from "./styled";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledWrapper>
      <StyledTypography>Page not found 404</StyledTypography>
      <StyledButton onClick={handleBack}>Back</StyledButton>
    </StyledWrapper>
  );
};

export default NotFoundPage;
