import { Container } from "@mui/material";
import {
  StyledAdvantagesWrapper,
  StyledGridWrapper,
  StyledImg,
  StyledTypography,
} from "./styled";

import Grid from "@mui/material/Grid2";
import Card from "./Card";
import { CARDS } from "./Card/cards";

import lamaImage from "/images/advantages/lama.svg";

const Advantages = () => {
  return (
    <StyledAdvantagesWrapper>
      <Container maxWidth="lg">
        <StyledTypography>Переваги</StyledTypography>

        <StyledGridWrapper>
          <Grid
            rowGap={{
              sm: 2,
              lg: 4,
            }}
            spacing={{
              xs: 2,
              md: 8,
              lg: 12,
            }}
            container
          >
            {CARDS.map((card, index) => (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                }}
                key={index}
              >
                <Card
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </Grid>
            ))}
          </Grid>

          <StyledImg src={lamaImage} alt="Lama image" />
        </StyledGridWrapper>
      </Container>
    </StyledAdvantagesWrapper>
  );
};

export default Advantages;
