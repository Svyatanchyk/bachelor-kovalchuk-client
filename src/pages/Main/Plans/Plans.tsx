import { Box, Container, List } from "@mui/material";
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

const Plans = () => {
  return (
    <StyledPlansWrapper>
      <Container maxWidth="lg">
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
                <ListItem>100 генерацій в місяць</ListItem>
                <ListItem>Підтримка ком’юніті</ListItem>
              </StyledList>
              <Box sx={{ mt: "auto" }}>
                <Button text="Почати" />
              </Box>
            </StyledGridItem>

            <StyledGridItem
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
                <ListItem>Генерації без лімітів</ListItem>
                <ListItem>Вища швидкість генерації</ListItem>
                <ListItem>Просунута аналітика</ListItem>
                <ListItem>Пріоритетна підтримка</ListItem>
              </StyledList>
              <Button text="Підписатись зараз" />
            </StyledGridItem>
          </Grid>
          <StyledImg src={moneyLamaImage} alt="Lama with money" />
        </StyledGridWrapper>
      </Container>
    </StyledPlansWrapper>
  );
};

export default Plans;
