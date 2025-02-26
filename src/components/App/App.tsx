import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <Outlet />
    </SnackbarProvider>
  );
};

export default App;
