import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { loadCustomFonts } from "../../utils/canvasUtils";
import Header from "../Header";
import Footer from "../Footer";
import { StyledAppWrapper } from "./styled";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const CLIENT_ID = import.meta.env.VITE_API_GOOGLE_OAUTH_CLIENT_ID;

  useEffect(() => {
    const loadFonts = async () => {
      await loadCustomFonts();
    };

    loadFonts();
  }, []);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <StyledAppWrapper>
        <Header />
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Outlet />
        </SnackbarProvider>
        <Footer />
      </StyledAppWrapper>
    </GoogleOAuthProvider>
  );
};

export default App;
