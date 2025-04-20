import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Advantages from "./Advantages";
import ContactUs from "./ContactUs";
import Features from "./Features";
import Intro from "./Intro";
import Plans from "./Plans";
import { StyledMainWrapper } from "./styled";

const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <Intro />
      <Features />
      <Advantages />
      <Plans />
      <ContactUs />
      <Footer />
    </StyledMainWrapper>
  );
};

export default Main;
