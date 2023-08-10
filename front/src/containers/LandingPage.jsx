import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => (
  <div>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Footer />
  </div>
);

export default LandingPage;
