import React,{useEffect} from "react";
import Image from "next/image";
import IEMPACT from "../../public/images/IEMPACT Logo.png";
import EstMusic from '../../public/images/events/1.png'
import EstDance from '../../public/images/events/2.png'
import Quizzard from '../../public/images/events/5.png'
import Debate from '../../public/images/events/6.png'
import Beatboxing from '../../public/images/events/9.png'
import CreativeWriting from '../../public/images/events/8.png'
import FUTSAL from '../../public/images/events/7.png'
import StepUp from '../../public/images/events/4.png'
import WstMusic from '../../public/images/events/3.png'
import FacePainting from '../../public/images/events/10.png'
import TreasureHunt from '../../public/images/events/11.png'

import AOS from "aos";
import "aos/dist/aos.css";

const Events = (event) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[]);
  return (
    <>
    <section id="events">
      <div className="container">
      <header className="section-header">
          <h3>EVENTS</h3>
        </header>
        <div className="row">
          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={EstMusic} className="img-fluid" alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Eastern Music</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={EstDance} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Eastern Dance</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={Quizzard} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>QUIZZARD</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={Debate} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>DEBATE</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={Beatboxing} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                    <h3>BEATBOXING</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={CreativeWriting} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Creative Writing</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>  
          </div>

          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={FUTSAL} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>FUTSAL</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>  
          </div>

          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={StepUp} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Step Up</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>  
          </div>

          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={WstMusic} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Western Music</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>  
          </div>

          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={FacePainting} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Face Painting</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>  
          </div>

          <div className="col-lg-4" data-aos="flip-left" data-aos-duration="2000">
            <div id="content">
              <div className="item e5">
                <Image src={TreasureHunt} className="img-fluid " alt="" />
                <div id="e5bk"></div>
                <div className="text5">
                  <h3>Treasure Hunt</h3>
                  <p>Event Description</p>
                </div>
                <div className="line inside"></div>
              </div>
            </div>  
          </div>


        </div>
      </div>
      </section>
    </>
  );
};

export default Events;
