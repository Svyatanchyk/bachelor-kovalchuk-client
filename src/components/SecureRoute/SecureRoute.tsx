import { Box } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const { isAuthenticated, isPending } = useAuth();

  if (isPending) {
    return <Box sx={{ minHeight: "80vh" }}>Loading...</Box>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default SecureRoute;
