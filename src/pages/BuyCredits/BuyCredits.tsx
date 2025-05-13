import { Box, Container, Stack, Typography } from "@mui/material";
import {
  StyledBuyCreditsBox,
  StyledCoinIcon,
  StyledFlexBox,
  StyledTypography,
  StyledTypographyLabel,
} from "./styled";
import Slider from "./Slider";
import Delimiter from "./Delimiter";
import Input from "./Input";
import { useState } from "react";
import Button from "../../components/Buttons/Button";

import coinIcon from "/images/header/coin.svg";

const BuyCredits = () => {
  const [creditsAmount, setCreditsAmount] = useState<number | number[]>(500);
  const PRICE_PER_CREDIT = 0.012;

  const creditsPrice = (
    Math.floor(PRICE_PER_CREDIT * Number(creditsAmount) * 100) / 100
  ).toFixed(2);

  return (
    <Box>
      <Container maxWidth="lg">
        <StyledBuyCreditsBox>
          <StyledTypography>Кредити</StyledTypography>
          <Box sx={{ mb: 4 }}>
            <Slider handleChange={setCreditsAmount} value={creditsAmount} />
          </Box>
          <Delimiter />

          <Box sx={{ mt: 4, mb: 5 }}>
            <Input handleChange={setCreditsAmount} value={creditsAmount} />
          </Box>

          <Stack direction="column" spacing={2}>
            <StyledFlexBox>
              <Stack direction="column" spacing={0}>
                <Typography sx={{ color: "#D6B3FF" }}>Сума</Typography>
                <StyledTypographyLabel>${creditsPrice}</StyledTypographyLabel>
              </Stack>
              <Stack direction="column" spacing={0}>
                <Typography sx={{ color: "#D6B3FF" }}>Монети</Typography>
                <Stack direction="row" spacing={1}>
                  <StyledTypographyLabel>{creditsAmount}</StyledTypographyLabel>
                  <StyledCoinIcon width={30} src={coinIcon} alt="Coin icon" />
                </Stack>
              </Stack>
            </StyledFlexBox>

            <Button onClick={() => {}}>Купити</Button>
          </Stack>
        </StyledBuyCreditsBox>
      </Container>
    </Box>
  );
};

export default BuyCredits;
