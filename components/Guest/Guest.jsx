import React from "react";
import Image from "next/image";
import Trap from "../../public/images/aboutimg.jpeg";
import Music from "../../public/1.svg";
import Tabla from "../../public/2.svg";
const Guest = () => {
  return (
    <section id="guest">
      <div className="container">
        <header className="section-header">
          <h3>Guest Performance</h3>
        </header>
        <div className="row">
          <div className="col-lg-6 img">
            <Image
              src={Trap}
              className="img-fluid "
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-6">
            <div className="music1">
              <Image
                src={Tabla}
                // className="img-fluid "
                alt=""
                data-aos="zoom-in"
              />
            </div>
            <h1>Pandit Bickram Ghosh </h1>
            <h2>21st January</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 order-first order-lg-last img">
            <Image
              src={Trap}
              className="img-fluid "
              alt=""
              data-aos="zoom-in"
            />
          </div>
          <div className="col-lg-6 order-last order-lg-first">
            <div className="music">
              <Image
                src={Music}
                // className="img-fluid "
                alt=""
                data-aos="zoom-in"
              />
            </div>

            <h1>The Radical Array Project </h1>
            <h2>22nd January</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guest;
