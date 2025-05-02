import { Box, Container, Typography } from "@mui/material";
import {
  StyledArrowImage,
  // StyledBgImage,
  // StyledButton,
  StyledButtonsBox,
  StyledImageTypography,
  StyledImageWrapper,
  StyledIntroWrapper,
  StyledLamaImage,
  // StyledPlayButton,
  // StyledReactPlayer,
  StyledText,
  // StyledTypography,
  // StyledVideoBox,
} from "./styled";
import Button from "../../../components/Buttons/Button";
import logo from "/images/logo.svg";
import lama1 from "/images/intro/lama1.svg";
import lama2 from "/images/intro/lama2.svg";
import lama3 from "/images/intro/lama3.svg";
import arrow from "/images/intro/arrow.svg";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

// import videoBackground from "/images/intro/video-background.svg";
// import { useState } from "react";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Intro = () => {
  const navigate = useNavigate();
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // const handlePlay = (value: boolean) => {
  //   setIsPlaying(value);
  // };

  const handleNavigate = () => {
    navigate("/generate-creative");
  };

  return (
    <StyledIntroWrapper id="about-us">
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <img width={250} src={logo} alt="logo" />
        </Box>

        <StyledText>
          Веб-Застосунок для створення <br /> та редагування рекламних креативів{" "}
        </StyledText>

        <StyledButtonsBox>
          <Button sx={{ textTransform: "initial" }} onClick={handleNavigate}>
            Спробуй безкоштовно
          </Button>
        </StyledButtonsBox>

        <Grid
          sx={{ position: "relative" }}
          justifyContent="center"
          container
          spacing={4}
        >
          <Grid size={4}>
            <StyledImageWrapper>
              <StyledLamaImage width={250} src={lama1} alt="Lama" />
              <StyledImageTypography>
                Створення <br /> запиту
              </StyledImageTypography>
            </StyledImageWrapper>
          </Grid>
          <Grid justifyContent="center" size={4}>
            <StyledImageWrapper
              sx={{
                position: "relative",
                top: -20,
              }}
            >
              <StyledLamaImage width={250} src={lama3} alt="Lama" />
              <StyledImageTypography>Генерація</StyledImageTypography>
            </StyledImageWrapper>
          </Grid>
          <Grid justifyContent="center" size={4}>
            <StyledImageWrapper>
              <StyledLamaImage width={250} src={lama2} alt="Lama" />
              <StyledImageTypography>
                Збільшення <br /> % CTR{" "}
              </StyledImageTypography>
            </StyledImageWrapper>
          </Grid>

          <StyledArrowImage sx={{ left: "25%", top: 0 }} src={arrow} />
          <StyledArrowImage
            sx={{ left: "62%", top: 0, transform: "rotate(15deg)" }}
            src={arrow}
          />
        </Grid>
      </Container>

      {/* <StyledVideoBox>
        <Container maxWidth="md">
          <Box
            sx={{
              width: "100%",
              height: {
                xs: 250,
                sm: 350,
                md: 400,
                lg: 450,
              },
              position: "relative",
            }}
          >
            <StyledReactPlayer
              url="https://www.youtube.com/watch?v=7g6SoILhKfM&ab_channel=ChillFlow"
              controls={false}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              playing={isPlaying}
              onPause={() => handlePlay(false)}
            />
          </Box>
        </Container>
        <StyledBgImage src={videoBackground} />
        {!isPlaying && (
          <StyledPlayButton
            onClick={() => handlePlay(true)}
            sx={{ cursor: "pointer" }}
          >
            <PlayArrowIcon fontSize="large" />
          </StyledPlayButton>
        )}
      </StyledVideoBox> */}
    </StyledIntroWrapper>
  );
};

export default Intro;
