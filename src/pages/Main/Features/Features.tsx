import { StyledFeaturesWrapper, StyledTypography } from "./styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FEATURES } from "./constants";
import SliderItem from "./SliderItem";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Features = () => {
  return (
    <StyledFeaturesWrapper id="features">
      <Container maxWidth="xl">
        <StyledTypography>Основні фішки</StyledTypography>
        {/* <Slider {...SETTINGS}> */}

        <Grid
          container
          spacing={{
            xs: 1,
            md: 2,
          }}
        >
          {FEATURES.map(({ icon, title, description }, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 4,
              }}
            >
              <SliderItem
                key={index}
                icon={icon}
                title={title}
                description={description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* </Slider> */}
    </StyledFeaturesWrapper>
  );
};

export default Features;
