import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Advantages from "./Advantages";
import ContactUs from "./ContactUs";
import Plans from "./Plans";
import { StyledMainWrapper } from "./styled";

const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <Advantages />
      <Plans />
      <ContactUs />
      <Footer />
    </StyledMainWrapper>
  );
};

export default Main;
