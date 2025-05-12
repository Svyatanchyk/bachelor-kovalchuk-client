import { Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { enqueueSnackbar } from "notistack";

const GoogleButton = () => {
  const navigate = useNavigate();
  const { setUserData, setIsAuthenticated } = useUser();

  const handleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential;

    if (!idToken) return;

    try {
      const res = await axiosInstance.post(
        "/api/auth/google/token",
        { idToken },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = res.data.accessToken;
      const user = res.data.user;
      localStorage.setItem("accessToken", token);

      setUserData({
        userId: user.userId,
        nickname: user.nickname,
        tokenBalance: user.tokenBalance,
        email: user.email,
        role: user.role,
        provider: user.provider,
      });

      setIsAuthenticated(true);

      setTimeout(() => {
        navigate("/");
      }, 50);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        zIndex: 2,
      }}
    >
      <GoogleLogin
        useOneTap={true}
        onSuccess={handleSuccess}
        onError={() => {
          enqueueSnackbar("Error", { variant: "error" });
        }}
      />
    </Box>
  );
};

export default GoogleButton;
