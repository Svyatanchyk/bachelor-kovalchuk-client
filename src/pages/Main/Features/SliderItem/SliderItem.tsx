import { Box } from "@mui/material";
import {
  StyledDescription,
  StyledFlexBox,
  StyledIcon,
  StyledSliderItem,
  StyledTitle,
} from "./styled";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const SliderItem = ({ description, title, icon }: Props) => {
  return (
    <StyledSliderItem>
      <StyledFlexBox>
        <StyledIcon src={icon} alt="icon" />

        <Box>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </Box>
      </StyledFlexBox>
    </StyledSliderItem>
  );
};

export default SliderItem;
