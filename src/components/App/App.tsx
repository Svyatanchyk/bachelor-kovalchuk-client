import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { loadCustomFonts } from "../../utils/canvasUtils";
import Header from "../Header";
import Footer from "../Footer";
import { StyledAppWrapper } from "./styled";

const App = () => {
  useEffect(() => {
    const loadFonts = async () => {
      await loadCustomFonts();
    };

    loadFonts();
  }, []);

  return (
    <StyledAppWrapper>
      <Header />
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Outlet />
      </SnackbarProvider>
      <Footer />
    </StyledAppWrapper>
  );
};

export default App;
