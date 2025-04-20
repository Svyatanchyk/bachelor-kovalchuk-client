import { Box } from "@mui/material";
import { StyledFeaturesWrapper, StyledTypography } from "./styled";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FEATURES } from "./constants";
import SliderItem from "./SliderItem";
import { SETTINGS } from "./sliderSettings";

const Features = () => {
  return (
    <StyledFeaturesWrapper>
      <StyledTypography>Основні фішки</StyledTypography>
      <Slider {...SETTINGS}>
        {FEATURES.map(({ icon, title, description }, index) => (
          <SliderItem
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </Slider>
    </StyledFeaturesWrapper>
  );
};

export default Features;
