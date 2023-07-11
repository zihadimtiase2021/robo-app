import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BillingSection from "./components/BillingSection";
import BottomOffer from "./components/BottomOffer";
import CardDill from "./components/CardDill";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ImageSection from "./components/ImageSection";
import Navbar from "./components/Navbar";
import StateSection from "./components/StateSection";
import Testimonial from "./components/Testimonial";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <StateSection />
      <BillingSection />
      <CardDill />
      <Testimonial />
      <ImageSection />
      <BottomOffer />
      <Footer />
    </>
  );
};

export default App;
