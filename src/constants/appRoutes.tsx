import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ConfirmVerification from "../pages/ConfirmVerification";
import RegenerateVerification from "../pages/RegenerateVerification";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/user/verify/:userId/:uniqueString",
    element: <ConfirmVerification />,
  },
  {
    path: "/user/regenerate/verification/:userId",
    element: <RegenerateVerification />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
