import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { loadCustomFonts } from "../../utils/canvasUtils";

const App = () => {
  useEffect(() => {
    const loadFonts = async () => {
      await loadCustomFonts();
    };

    loadFonts();
  }, []);

  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <Outlet />
    </SnackbarProvider>
  );
};

export default App;
