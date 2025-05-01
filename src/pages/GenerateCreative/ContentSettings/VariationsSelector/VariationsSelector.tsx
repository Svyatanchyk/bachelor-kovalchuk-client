import {
  StyledButton,
  StyledButtonsBox,
  StyledVariationsBox,
  StyledVariationsTypography,
} from "./styled";
import { MAX_TEXTS } from "./constants";

type Props = {
  activeButtonIndex: number;
  handleChangeNumberOfTexts: (activeButtonIndex: number) => void;
};

const VariationsSelector = ({
  activeButtonIndex,
  handleChangeNumberOfTexts,
}: Props) => {
  return (
    <StyledVariationsBox>
      <StyledVariationsTypography>Варіації</StyledVariationsTypography>
      <StyledButtonsBox>
        {Array.from({ length: MAX_TEXTS }).map((_, index) => (
          <StyledButton
            onClick={() => handleChangeNumberOfTexts(index + 1)}
            isActive={activeButtonIndex === index + 1}
          >
            {index + 1}
          </StyledButton>
        ))}
      </StyledButtonsBox>
    </StyledVariationsBox>
  );
};

export default VariationsSelector;
