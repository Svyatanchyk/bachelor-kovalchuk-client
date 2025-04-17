import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Advantages from "./Advantages";
import ContactUs from "./ContactUs";
import { StyledMainWrapper } from "./styled";

const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <Advantages />
      <ContactUs />
      <Footer />
    </StyledMainWrapper>
  );
};

export default Main;
