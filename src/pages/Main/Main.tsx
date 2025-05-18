import { useEffect } from "react";
import Advantages from "./Advantages";
import ContactUs from "./ContactUs";
import Features from "./Features";
import Intro from "./Intro";
import Plans from "./Plans";

const Main = () => {
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Intro />
      <Features />
      <Advantages />
      <Plans />
      <ContactUs />
    </>
  );
};

export default Main;
