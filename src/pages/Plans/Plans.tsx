import { Box, Container, Typography } from "@mui/material";
import { StyledImg, StyledPlansWrapper } from "./styled";
import Grid from "@mui/material/Grid2";
import PlanCard from "./PlanCard";

const plans = [
  {
    moneyBag: "/images/plans/money-bag.svg",
    monets: 100,
    monetsBase: 90,
    monetsBonus: 10,
    price: "0.99$",
    isBestPrice: false,
  },
  {
    moneyBag: "/images/plans/money-bag2.svg",
    monets: 170,
    monetsBase: 160,
    monetsBonus: 10,
    price: "1.99$",
    isBestPrice: false,
  },
  {
    moneyBag: "/images/plans/money-bag3.svg",
    monets: 3650,
    monetsBase: 320,
    monetsBonus: 45,
    price: "3.99$",
    isBestPrice: false,
  },
  {
    moneyBag: "/images/plans/money-bag4.svg",
    monets: 585,
    monetsBase: 480,
    monetsBonus: 105,
    price: "5.99$",
    isBestPrice: false,
  },
  {
    moneyBag: "/images/plans/money-bag5.svg",
    monets: 1050,
    monetsBase: 800,
    monetsBonus: 250,
    price: "9.99$",
    isBestPrice: true,
  },
  {
    moneyBag: "/images/plans/money-bag6.svg",
    monets: 2285,
    monetsBase: 1600,
    monetsBonus: 685,
    price: "19.99$",
    isBestPrice: false,
  },
];

import lamaImg from "/images/plans/lama.svg";

const Plans = () => {
  return (
    <StyledPlansWrapper>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: "#D6B3FF",
            fontWeight: 700,
            fontSize: "2rem",
            textAlign: "center",
            mb: 8,
          }}
        >
          Паки
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Grid container spacing={4}>
            {plans.map((plan) => (
              <PlanCard
                isBestPrice={plan.isBestPrice}
                price={plan.price}
                monets={plan.monets}
                moneyBag={plan.moneyBag}
                monetsBase={plan.monetsBase}
                monetsBonus={plan.monetsBonus}
              />
            ))}
          </Grid>

          <StyledImg src={lamaImg} alt="Lama" />
        </Box>
      </Container>
    </StyledPlansWrapper>
  );
};

export default Plans;
