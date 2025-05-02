import { Box, Container, Stack } from "@mui/material";
import Input from "../../../components/Input";
import {
  StyledContactUsWrapper,
  StyledContainer,
  StyledImg,
  StyledTypography,
} from "./styled";

import Button from "../../../components/Buttons/Button";
import lamaImage from "/images/contact-us/lama.svg";

const ContactUs = () => {
  return (
    <StyledContactUsWrapper id="support">
      <StyledContainer>
        {/* <Container maxWidth="sm"> */}
        <StyledTypography>Зв’яжіться з нами</StyledTypography>
        <form>
          <Stack
            direction="column"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            <Input
              type="text"
              placeholder="Гриць"
              htmlFor="name"
              label="Ім'я"
            />

            <Input
              type="email"
              placeholder="Lamanjak2007@ukr.net"
              htmlFor="email"
              label="Пошта"
            />

            <Input
              type="text"
              multiline={true}
              rows={6}
              placeholder="Любий щоденник..."
              htmlFor="comment"
              label="Коментар"
            />
          </Stack>
          <Box sx={{ mt: 4, position: "relative" }}>
            <Button onClick={() => {}}> Підписатись зараз</Button>
            <StyledImg src={lamaImage} alt="lama image" />
          </Box>
        </form>
      </StyledContainer>
      {/* </Container> */}
    </StyledContactUsWrapper>
  );
};

export default ContactUs;
