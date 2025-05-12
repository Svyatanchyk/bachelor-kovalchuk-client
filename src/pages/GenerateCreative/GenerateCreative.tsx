import { StyledWrapper } from "./styled";

import CreativeSettings from "./CreativeSettings";
import ContentSettings from "./ContentSettings";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { useCreativesContext } from "../../context/CreativesContext";

const GenerateCreative = () => {
  const { isAuthenticated } = useUser();
  const { setCreatives } = useCreativesContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return <Box sx={{ minHeight: "100vh" }} />;

  useEffect(() => {
    setCreatives([]);
  }, []);
  return (
    <StyledWrapper>
      <ContentSettings />
      <CreativeSettings />
    </StyledWrapper>
  );
};

export default GenerateCreative;
