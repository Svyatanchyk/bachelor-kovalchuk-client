import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authEventBus } from "../utils/eventBus";

export const AuthListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthFailure = () => {
      navigate("/signin");
    };

    authEventBus.on(handleAuthFailure);
  }, []);

  return null;
};
