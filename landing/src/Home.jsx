import { useState } from "react";
import "./App.css";
import Bottom from "./components/bottom/Bottom";
import Footer from "./components/footer/Footer";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import WhyChooseUs from "./components/why-choose-us/WhyChooseUs";

function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="container">
        <div className="page-inner">
          <div className="wrapper">
            <Main />
            <HowItWorks />
            <WhyChooseUs />
            <Pricing />
            <Footer />
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
