import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ConfirmVerification from "../pages/ConfirmVerification";
import RegenerateVerification from "../pages/RegenerateVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ConfirmResetPassword from "../pages/ConfirmResetPassword";
import Canvas from "../pages/Canvas";
import GenerateCreative from "../pages/GenerateCreative";
import App from "../components/App";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
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
        path: "/editor",
        element: <Canvas />,
      },
      {
        path: "/generate-creative",
        element: <GenerateCreative />,
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
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/reset-password/:userId/:resetString",
        element: <ConfirmResetPassword />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];
