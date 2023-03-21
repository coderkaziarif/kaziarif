import React from "react";
import Footer from "../Footer/Footer";
// import Profile from "./Profile";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import SocialLink from "./SocialLink";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home_container">
      <Navbar />
      {/* <Profile /> */}
      <Hero />
      <SocialLink />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
