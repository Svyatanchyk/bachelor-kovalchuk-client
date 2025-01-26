import { Alert, Box, Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useState } from "react";
import {
  confirmVerification,
  IConfirmVerificationResponse,
} from "../../services/confirmVerification";
import { StyledConfirmVerificationWrapper, StyledLink } from "./styled";

const ConfirmVerification = () => {
  const { userId, uniqueString } = useParams<{
    userId: string;
    uniqueString: string;
  }>();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      if (!userId || !uniqueString) {
        throw new Error("Invalid verification parameters.");
      }
      return confirmVerification(userId, uniqueString);
    },

    onSuccess: (data: IConfirmVerificationResponse) => {
      console.log("Verification Successful:", data.message);
      setSuccessMessage(data.message);
      setErrorMessage(null);
      setIsExpired(data.isExpired);
    },
    onError: (error: any) => {
      console.error("Verification Failed:", error);
      setSuccessMessage(null);
      setErrorMessage(error.response?.data?.message || error.message);
      setIsExpired(error.response?.data?.isExpired);
    },
  });

  const handleConfirmVerification = () => {
    mutate();
  };

  return (
    <StyledConfirmVerificationWrapper>
      <Box sx={{ marginBottom: 2 }}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Box>

      {isPending ? (
        <Loader />
      ) : successMessage ? (
        <>
          <Alert severity="success">{successMessage}</Alert>
          <StyledLink to="/signin">Sign in</StyledLink>
        </>
      ) : isExpired ? (
        <Button sx={{ fontWeight: 700 }} variant="outlined">
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
