import { Box } from "@mui/material";
import { StyledGridItem } from "./styled";

import coinIcon from "/images/plans/coin.svg";
// import moneyBag from "/images/plans/money-bag.svg";

interface Props {
  moneyBag: string;
  monets: number;
  monetsBase: number;
  monetsBonus?: number | null;
  price: string;
  isBestPrice: boolean;
}

const PlanCard = ({
  moneyBag,
  monets,
  monetsBase,
  monetsBonus,
  price,
  isBestPrice,
}: Props) => {
  return (
    <StyledGridItem size={{ xs: 12, sm: 6, md: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mb: 8,
        }}
      >
        <img src={coinIcon} alt="Coin" />
        <Box
          component="span"
          sx={{
            fontSize: {
              xs: "1.3rem",
              md: "2rem",
            },
            color: "#F3EBFE",
            fontWeight: 700,
          }}
        >
          {monets}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: { xs: 5, md: 10 },
        }}
      >
        <img width={200} src={moneyBag} alt="Money bag" />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", mb: { xs: 3, md: 5 } }}
      >
        <Box>
          <Box sx={{ color: "#D6B3FF", fontSize: "1.1rem" }} component="p">
            Монети: {monetsBase}
          </Box>
          {monetsBonus && (
            <Box
              sx={{
                color: "#D6B3FF",
                fontWeight: 700,
                fontSize: "1.3rem",
              }}
              component="p"
            >
              Бонус +{monetsBonus}
            </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#0E0017",
          py: 6,
          fontSize: {
            xs: "1.3rem",
            md: "2rem",
          },

          fontWeight: 700,
          borderTop: "2px solid #4f2357",
          textAlign: "center",
          color: "#F3EBFE",
          mt: "auto",
        }}
      >
        {price}
        {isBestPrice && (
          <Box sx={{ color: "#D6B3FF", fontWeight: 400, fontSize: "1rem" }}>
            Найкраща ціна
          </Box>
        )}
      </Box>
    </StyledGridItem>
  );
};

export default PlanCard;
