import { Alert, Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { StyledConfirmVerificationWrapper } from "./styled";
import { useVerifyAccount } from "../../hooks/useVerifyAccount";

const ConfirmVerification = () => {
  const { userId, uniqueString } = useParams<{
    userId: string;
    uniqueString: string;
  }>();

  const navigate = useNavigate();

  const { mutate, isPending, successMessage, errorMessage, isExpired } =
    useVerifyAccount(userId, uniqueString);

  const handleConfirmVerification = () => {
    mutate();
  };

  const handleNavigateToRegenerate = () => {
    navigate(`/user/regenerate/verification/${userId}`);
  };

  return (
    <StyledConfirmVerificationWrapper>
      <Box sx={{ marginBottom: 2 }}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Box>

      {isPending ? (
        <Loader />
      ) : successMessage ? (
        <Alert severity="success">{successMessage}</Alert>
      ) : isExpired ? (
        <Button
          onClick={handleNavigateToRegenerate}
          sx={{ fontWeight: 700 }}
          variant="outlined"
        >
          Regenerate verification link
        </Button>
      ) : !errorMessage ? (
        <Button
          onClick={handleConfirmVerification}
          sx={{ fontWeight: 700 }}
          variant="outlined"
        >
          Confirm your email
        </Button>
      ) : null}
    </StyledConfirmVerificationWrapper>
  );
};

export default ConfirmVerification;
