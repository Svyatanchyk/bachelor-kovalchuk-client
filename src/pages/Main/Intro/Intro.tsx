import { Box, Container } from "@mui/material";
import {
  StyledBgImage,
  StyledButton,
  StyledButtonsBox,
  StyledIntroWrapper,
  StyledPlayButton,
  StyledReactPlayer,
  StyledText,
  StyledTypography,
  StyledVideoBox,
} from "./styled";
import Button from "../../../components/Buttons/Button";
import videoBackground from "/images/intro/video-background.svg";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Intro = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = (value: boolean) => {
    setIsPlaying(value);
  };

  return (
    <StyledIntroWrapper>
      <Container maxWidth="lg">
        <StyledTypography>
          Штучний інтелект наступного поколоніня <br />
          для твого бізнесу
        </StyledTypography>
        <StyledText>
          Перетворіть свій робочий процес за допомогою нашої потужної платформи
          на основі ШІ. Генеруйте, аналізуйте та оптимізуйте з безпрецедентною
          швидкістю та точністю.
        </StyledText>

        <StyledButtonsBox>
          <Button text="Пробуй безкоштовно" />
          <StyledButton>Дізнатися більше</StyledButton>
        </StyledButtonsBox>
      </Container>
      <StyledVideoBox>
        <Container maxWidth="md">
          <Box
            sx={{
              width: "100%",
              height: {
                xs: 250,
                sm: 350,
                md: 500,
                lg: 550,
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
      </StyledVideoBox>
    </StyledIntroWrapper>
  );
};

export default Intro;
