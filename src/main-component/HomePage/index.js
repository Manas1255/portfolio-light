import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { Element } from "react-scroll";
import About from "../../components/about";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Portfolio from "../../components/portfolio";
import Scrollbar from "../../components/Scroolbar";
import Service from "../../components/Service";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      {/* <Testimonial/>
            <PricingPlan/> */}
      {/* <Element name="blog">
        <BlogSection />
      </Element> */}
      <Element name="contact">
        <ContactSection />
      </Element>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
