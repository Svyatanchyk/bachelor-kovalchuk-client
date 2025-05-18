import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { googleAuth } from "../services/googleAuth";
import { useUser } from "../context/UserContext";
import { Box } from "@mui/material";
import Loader from "./Loader";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { setUserData, setIsAuthenticated } = useUser();

  const { mutateAsync } = useMutation({
    mutationFn: googleAuth,
  });

  useEffect(() => {
    const fetchonMount = async (code: string) => {
      try {
        const res = await mutateAsync(code);
        console.log("Result: ", res);

        if (res) {
          const token = res.accessToken;
          const user = res.user;
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

          useEffect(() => {
            navigate("/");
          }, [50]);
        }
      } catch (error) {
        console.error("OAuth login failed:", error);
        navigate("/signin");
      }
    };
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      console.error("No code in URL");
      navigate("/signin");
      return;
    }

    fetchonMount(code);
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
      <Loader />
    </Box>
  );
};

export default AuthCallback;
