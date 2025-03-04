import React from "react";
import abimg from "../../images/about.jpg";
import DefaultModal from "../AboutModal";

const About = (props) => {
  return (
    <section id="about" className="tp-about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="tp-about-wrap">
              <div className="tp-about-img">
                <img src={abimg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="tp-about-text">
              <div className="tp-about-icon">
                <i className="fi flaticon-web-design"></i>
              </div>
              <div className="tp-about-icon-content">
                <h2>Professional And Dedicated Creative Designer</h2>
                <p>
                  I’m a passionate app developer specializing in React Native,
                  dedicated to building seamless, high-performance mobile
                  applications. With a deep understanding of modern state
                  management techniques and a keen eye for UI/UX, I craft
                  scalable and intuitive digital experiences. My expertise spans
                  from integrating complex APIs to optimizing app performance
                  for smooth user interactions.{" "}
                </p>
                <p>
                  Beyond coding, I bring the same level of discipline and
                  strategic thinking that once shaped my journey as a
                  professional athlete—now channeled into delivering top-tier
                  mobile solutions. Whether it's enhancing user engagement or
                  architecting robust app structures, I thrive on turning ideas
                  into impactful products.
                </p>
                {/* <div className="signeture">
                  <span>
                    <img src={sign} alt="" />
                  </span>
                  <p>Ceo Of Designlab IT</p>
                </div> */}
                <DefaultModal buttonClass={"template-btn"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_svg svg_white">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
};

export default About;
