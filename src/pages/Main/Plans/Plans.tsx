import { Box, Container } from "@mui/material";
import {
  StyledGridItem,
  StyledGridItemPrice,
  StyledGridItemSubTitle,
  StyledGridItemTitle,
  StyledGridWrapper,
  StyledImg,
  StyledList,
  StyledPlansWrapper,
  StyledTypography,
} from "./styled";
import Grid from "@mui/material/Grid2";
import Button from "../../../components/Buttons/Button";
import ListItem from "./ListItem";

import moneyLamaImage from "/images/plans/money-lama.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useBuySubscription } from "../../../hooks/useBuySubscription";

const Plans = () => {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  const { mutate: mutateBuySubscription } = useBuySubscription();

  const handleSubscribe = (subType: string) => {
    if (!isAuthenticated || !subType) {
      navigate("/signin");
      return;
    }
    mutateBuySubscription(subType);
  };

  return (
    <StyledPlansWrapper id="plans">
      <Container maxWidth="md">
        <StyledTypography>Цінові плани</StyledTypography>

        <StyledGridWrapper>
          <Grid container spacing={4}>
            <StyledGridItem
              sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <StyledGridItemTitle>Безкоштовний</StyledGridItemTitle>
              <StyledGridItemSubTitle>Чудово щоб почати</StyledGridItemSubTitle>
              <StyledGridItemPrice>$0</StyledGridItemPrice>
              <StyledList disablePadding>
                <ListItem>Основні можливості</ListItem>
                <ListItem>100 стартових монет</ListItem>
                <ListItem>Підтримка ком’юніті</ListItem>
              </StyledList>
              <Box sx={{ mt: "auto" }}>
                <Link to="/generate-creative">
                  <Button> Почати</Button>
                </Link>
              </Box>
            </StyledGridItem>

            <StyledGridItem
              highlight={true}
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <StyledGridItemTitle>Професійний</StyledGridItemTitle>
              <StyledGridItemSubTitle>
                Для професійного використання
              </StyledGridItemSubTitle>
              <StyledGridItemPrice>$49/міс</StyledGridItemPrice>
              <StyledList disablePadding>
                <ListItem>Всі фічі основної версії</ListItem>
                <ListItem>Доступ до перекладу креативів</ListItem>
                <ListItem>500 бонусних монет</ListItem>
                <ListItem>Пріоритетна підтримка</ListItem>
              </StyledList>
              <Button onClick={() => handleSubscribe("Proffesional")}>
                Підписатись зараз
              </Button>
            </StyledGridItem>
          </Grid>
          <StyledImg src={moneyLamaImage} alt="Lama with money" />
        </StyledGridWrapper>
      </Container>
    </StyledPlansWrapper>
  );
};

export default Plans;
