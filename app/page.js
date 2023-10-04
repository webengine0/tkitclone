import React from "react";
import Header from "@/Components/Header";
import FirstPageContent from "@/Components/FirstPageContent";
import SecondPageContent from "@/Components/SecondPageContent";
import ThirdPageContent from "@/Components/ThirdPageContent";
import FourthPageContent from "@/Components/FourthPageContent";
import EndContent from "@/Components/EndContent";
import Footer from "@/Components/Footer";
// import { Link } from "react-scroll";
const page = () => {
  return (
    <>
      <Header />
      <FirstPageContent />
      <SecondPageContent />
      <ThirdPageContent />
      <FourthPageContent />
      <EndContent />
      <Footer />
    </>
  );
};

export default page;
