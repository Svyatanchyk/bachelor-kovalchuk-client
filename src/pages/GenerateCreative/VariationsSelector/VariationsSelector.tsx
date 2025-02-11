import { Box, Slider } from "@mui/material";
import { StyledSliderBox } from "./styled";

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
        max={4}
        min={1}
      />
      <Box sx={{ fontWeight: 700 }}>{numberOfTexts} texts</Box>
    </StyledSliderBox>
  );
};

export default VariationsSelector;
