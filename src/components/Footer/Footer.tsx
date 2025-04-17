import { Box, Container, Stack, Typography } from "@mui/material";
import {
  StyledFotterWrapper,
  StyledGridWrapper,
  StyledList,
  StyledListItem,
  StyledTypography,
} from "./styled";
import Grid from "@mui/material/Grid2";

import instagram from "/images/footer/instagram.svg";
import twitter from "/images/footer/linkedin.svg";
import linkedin from "/images/footer/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFotterWrapper>
      <Container maxWidth="lg">
        <StyledGridWrapper>
          <Grid spacing={10} container>
            <Grid size={3}>
              <StyledTypography>Genarise</StyledTypography>
              <Typography
                sx={{
                  color: "#D6B3FF",
                  fontSize: "1rem",
                  fontFamily: "Montserrat Alternates, sans-serif",
                }}
              >
                Штучний інтелект наступного поколоніня для твого бізнесу
              </Typography>
            </Grid>
            <Grid size={3}>
              <StyledTypography>Компанія</StyledTypography>
              <StyledList>
                <StyledListItem sx={{ padding: 0 }}>Про нас</StyledListItem>
                <StyledListItem>Прівасі Полісі</StyledListItem>
                <StyledListItem>Термс Оф Юз</StyledListItem>
              </StyledList>
            </Grid>
            <Grid size={3}>
              <StyledTypography>Підтримка</StyledTypography>
              <StyledList>
                <StyledListItem>Центр Допомоги</StyledListItem>
                <StyledListItem>Контакти</StyledListItem>
                <StyledListItem>Питання та Відповіді</StyledListItem>
              </StyledList>
            </Grid>
            <Grid size={3}>
              <StyledTypography>Follow us</StyledTypography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Link to="#">
                  <img src={twitter} alt="twitter icon" />
                </Link>

                <Link to="#">
                  <img src={linkedin} alt="instagram icon" />
                </Link>

                <Link to="#">
                  <img src={instagram} alt="linkedin icon" />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </StyledGridWrapper>

        <Box sx={{ paddingTop: 8, paddingBottom: 4 }}>
          <Typography sx={{ textAlign: "center" }}>
            © 2025 Genarise всі права захищені
          </Typography>
        </Box>
      </Container>
    </StyledFotterWrapper>
  );
};

export default Footer;
