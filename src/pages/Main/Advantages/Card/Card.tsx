import { Box } from "@mui/material";
import {
  StyledCardWrapper,
  StyledDescription,
  StyledFlexBox,
  StyledIcon,
  StyledTitle,
} from "./styled";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ description, title, icon }: Props) => {
  return (
    <StyledCardWrapper>
      <StyledFlexBox>
        <StyledIcon src={icon} alt="icon" />

        <Box>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </Box>
      </StyledFlexBox>
    </StyledCardWrapper>
  );
};

export default Card;
