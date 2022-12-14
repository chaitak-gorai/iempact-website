import React from "react";
import Image from "next/image";
import Trap from "../../public/logo/TRAP_LOGO.jpg";
import Music from "../../public/1.png";
import Tabla from "../../public/2.png";
const Guest = () => {
  return (
    <section id="guest">
      <div className="container">
        <header className="section-header">
          <h3>Guest Performance</h3>
        </header>
        <div className="row pt-5">
          <div className="col-lg-6 order-first order-lg-last img">
            <Image
              src={Trap}
              className="img-fluid"
              alt=""
              data-aos="fade-left"
              data-aos-duration="2500"
            />
          </div>
          <div className="col-lg-6 order-last order-lg-first write">
            <div className="music1">
              <Image
                src={Music}
                className="img-fluid"
                alt=""
                data-aos="zoom-in"
                data-aos-duration="2500"
              />
            </div>

            <h1>The Radical Array Project </h1>
            <h2>22nd January</h2>
            <p>
              TRAP is a band based in Bengal, they tend to do songs of every
              genre (languages: English, Hindi and Bengali). They specialize in
              their unique musical sense and the violin present in their band.
              They are now recognized as an international group, very popular
              among students and have performed more than 200 shows in all over
              India and abroad.
            </p>
            <br />
            <p>
              <b>Line up:</b> The five-piece band comprises Arijit Paul (vocals),
              Anupam Pyne (keyboard/vocals), Swapnabha Roy (bass guitar),
              Suanjito Dutta (drums and percussion), and Bhaswar Sen, who, in
              addition to playing the viola and violin, is in charge of
              arrangements and composition.
            </p>
            <br/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guest;
