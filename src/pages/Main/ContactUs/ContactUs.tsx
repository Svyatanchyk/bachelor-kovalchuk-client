import { Box, Stack } from "@mui/material";
import Input from "../../../components/Input";
import {
  StyledContactUsWrapper,
  StyledContainer,
  StyledTypography,
} from "./styled";

import Button from "../../../components/Buttons/Button";

const ContactUs = () => {
  return (
    <StyledContactUsWrapper>
      <StyledContainer>
        <StyledTypography>Зв’яжіться з нами</StyledTypography>
        <form>
          <Stack direction="column" spacing={1}>
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
          <Box sx={{ mt: 4 }}>
            <Button text="Надіслати" />
          </Box>
        </form>
      </StyledContainer>
    </StyledContactUsWrapper>
  );
};

export default ContactUs;
