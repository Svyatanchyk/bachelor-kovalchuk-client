import { Box, Container, Typography } from "@mui/material";
import {
  StyledFotterWrapper,
  StyledGridWrapper,
  StyledList,
  StyledListItem,
  StyledLogoImg,
  StyledTypography,
} from "./styled";
import Grid from "@mui/material/Grid2";

import logo from "/images/logo.svg";

const Footer = () => {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <StyledFotterWrapper>
      <Container maxWidth="lg">
        <StyledGridWrapper>
          <Grid
            spacing={{
              xs: 8,
              md: 10,
            }}
            container
          >
            <Grid
              size={{
                xs: 6,
                md: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                    xs: "flex-start",
                    md: "center",
                  },
                }}
              >
                <StyledLogoImg sx={{ mb: 2 }} src={logo} />
                <Typography
                  sx={{
                    color: "#D6B3FF",
                    textAlign: "center",
                    fontSize: {
                      xs: "1rem",
                      sm: "1.3rem",
                    },
                    fontFamily: "Montserrat Alternates, sans-serif",
                  }}
                >
                  Веб-Застосунок
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 3,
              }}
            >
              <StyledTypography>Компанія</StyledTypography>
              <StyledList>
                <StyledListItem
                  onClick={() => handleScroll("#about-us")}
                  sx={{ padding: 0, cursor: "pointer" }}
                >
                  Про нас
                </StyledListItem>
              </StyledList>
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 3,
              }}
            >
              <StyledTypography>Інформація</StyledTypography>
              <StyledList>
                <StyledListItem onClick={() => handleScroll("#about-us")}>
                  Опис веб-застосунку
                </StyledListItem>
                <StyledListItem onClick={() => handleScroll("#features")}>
                  Основні фішки
                </StyledListItem>
                <StyledListItem onClick={() => handleScroll("#advantages")}>
                  Переваги
                </StyledListItem>
                <StyledListItem onClick={() => handleScroll("#plans")}>
                  Цінові плани
                </StyledListItem>
              </StyledList>
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 3,
              }}
            >
              <StyledTypography>Підтримка</StyledTypography>
              <StyledList>
                <StyledListItem onClick={() => handleScroll("#support")}>
                  Центр допомоги
                </StyledListItem>
              </StyledList>
            </Grid>
          </Grid>
        </StyledGridWrapper>

        <Box
          sx={{
            paddingTop: {
              xs: 4,
              sm: 8,
            },
            paddingBottom: {
              xs: 2,
              sm: 4,
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
              },
            }}
          >
            © 2025 Genarise всі права захищені
          </Typography>
        </Box>
      </Container>
    </StyledFotterWrapper>
  );
};

export default Footer;
