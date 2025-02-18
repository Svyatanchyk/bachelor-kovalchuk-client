import { Box, Slider } from "@mui/material";
import { StyledSliderBox } from "./styled";
import { MAX_TEXTS, MIN_TEXTS } from "./constants";

type Props = {
  numberOfTexts: number;
  handleChangeNumberOfTexts: (_: Event, newValue: number | number[]) => void;
};

const VariationsSelector = ({
  numberOfTexts,
  handleChangeNumberOfTexts,
}: Props) => {
  return (
    <StyledSliderBox>
      <Slider
        value={numberOfTexts}
        onChange={handleChangeNumberOfTexts}
        min={MIN_TEXTS}
        max={MAX_TEXTS}
      />
      <Box sx={{ fontWeight: 700 }}>{numberOfTexts} varitations</Box>
    </StyledSliderBox>
  );
};

export default VariationsSelector;
