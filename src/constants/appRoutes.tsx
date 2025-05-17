import { RouteObject } from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ConfirmVerification from "../pages/ConfirmVerification";
import RegenerateVerification from "../pages/RegenerateVerification";
import ForgotPassword from "../pages/ForgotPassword";
import ConfirmResetPassword from "../pages/ConfirmResetPassword";
import GenerateCreative from "../pages/GenerateCreative";
import App from "../components/App";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import History from "../pages/History";
import BuyCredits from "../pages/BuyCredits";
import SecureRoute from "../components/SecureRoute";

export const routes: RouteObject[] = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
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
        path: "/profile",
        element: <SecureRoute />,
        children: [{ path: "", element: <Profile /> }],
      },
      {
        path: "/history",
        element: <SecureRoute />,
        children: [{ path: "", element: <History /> }],
      },
      {
        path: "/buy-credits",
        element: <SecureRoute />,
        children: [{ path: "", element: <BuyCredits /> }],
      },
      {
        path: "/generate-creative",
        element: <SecureRoute />,
        children: [{ path: "", element: <GenerateCreative /> }],
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
