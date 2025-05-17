import { StyledWrapper } from "./styled";
import CreativeSettings from "./CreativeSettings";
import ContentSettings from "./ContentSettings";
import { useEffect } from "react";
import { useCreativesContext } from "../../context/CreativesContext";

const GenerateCreative = () => {
  const { setCreatives } = useCreativesContext();

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
