import { Button } from "@mui/material";

const GoogleButton = () => {
  const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const clientId = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;

  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;

  return (
    <Button
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        zIndex: 2,
      }}
      onClick={() => {
        window.location.href = url;
      }}
    />
  );
};

export default GoogleButton;
