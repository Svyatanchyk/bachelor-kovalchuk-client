import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <>
      <SnackbarProvider />
      <Outlet />
    </>
  );
};

export default App;
