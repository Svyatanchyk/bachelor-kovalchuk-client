import { StyledWrapper } from "./styled";

import CreativeSettings from "./CreativeSettings";
import ContentSettings from "./ContentSettings";

const GenerateCreative = () => {
  return (
    <StyledWrapper>
      <ContentSettings />
      <CreativeSettings />
    </StyledWrapper>
  );
};

export default GenerateCreative;
