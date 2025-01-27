import { Alert, Box } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import {
  IRegenerateVerificationResponse,
  regenerateVerification,
} from "../../services/regenerateVerification";

const RegenerateVerification = () => {
  const { userId } = useParams<{ userId: string }>();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      if (!userId) {
        throw new Error("Invalid verification parameters.");
      }
      return regenerateVerification(userId);
    },
    onSuccess: (data: IRegenerateVerificationResponse) => {
      console.log("Regenerating verification link Successful:", data.message);
      console.log(data);

      setSuccessMessage(data.message);
      setErrorMessage(null);
    },
    onError: (error: any) => {
      console.error("Regenerating verification link Failed:", error);
      setSuccessMessage(null);
      setErrorMessage(error.response?.data?.message || error.message);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isPending && <Loader />}

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
      </Box>
    </Box>
  );
};

export default RegenerateVerification;
