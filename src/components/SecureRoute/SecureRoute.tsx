import { Box } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../Loader";

const SecureRoute = () => {
  const { isAuthenticated, isPending } = useAuth();

  if (isPending) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </Box>
    );
  }

  return isAuthenticated && !isPending ? (
    <Outlet />
  ) : (
    <Box sx={{ height: "100vh" }}>
      <Navigate to="/signin" replace />
    </Box>
  );
};

export default SecureRoute;
