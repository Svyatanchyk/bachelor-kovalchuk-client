import { StyledWrapper } from "./styled";

import CreativeSettings from "./CreativeSettings";
import ContentSettings from "./ContentSettings";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box } from "@mui/material";

const GenerateCreative = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return <Box sx={{ minHeight: "100vh" }} />;

  return (
    <StyledWrapper>
      <ContentSettings />
      <CreativeSettings />
    </StyledWrapper>
  );
};

export default GenerateCreative;
