import { Box } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const GoogleButton = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

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

      console.log("response from server from token: ", res);

      const token = res.data.accessToken;
      localStorage.setItem("accessToken", token);
      setUser({
        userId: res.data.userId,
        nickname: res.data.nickname,
        tokenBalance: res.data.tokenBalance,
        email: res.data.email,
        role: res.data.role,
      });

      navigate("/");
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
      <GoogleLogin useOneTap={false} onSuccess={handleSuccess} />
    </Box>
  );
};

export default GoogleButton;
