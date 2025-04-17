import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactUs from "./ContactUs";
import { StyledMainWrapper } from "./styled";

const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <ContactUs />
      <Footer />
    </StyledMainWrapper>
  );
};

export default Main;
