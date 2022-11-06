import React from "react";
import ABoutIMG from "../../public/images/aboutimg.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>About Us</h3>
        </header>
        <div className="row justify-content-between">
          <div className="col-lg-6 pt-5 pt-lg-0 aboutus">
            <p>
              IEMPACT, the Annual Cultural Fest of IEM, is back with its 32nd
              edition after 2 years of online lives- education, events. As the
              Annual Cultural Fest of IEM, Saltlake we bring to you dance,
              music, football, quiz, debate, art and most importantly Hope and
              Joy. We wish to see the smiles on the faces of all participants
              and audience in our event, in front of us face to face hence we
              hope. As we know, &quot;Hope is the one thing that can help us get
              through the darkest of times&quot; This might be the truest thing
              we have heard especially when we really went through one of the
              darkest of times in our lives, the second wave of Covid-19. We
              hoped for some cure, prayed so that our near and dear ones would
              stay safe, ran around for oxygen only for hope of seeing a new day
              with a new light. We hoped and will always hope for a better day.
              Hence we bring IEMPACT 2022 with the hope that it might bring some
              joy and hope in our lives because again, &quot;Hope is the New
              Normal&quot;
            </p>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center about-img">
            <Image
              src={ABoutIMG }
              className="img-fluid "
              alt=""
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
