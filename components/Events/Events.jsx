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
                  <p>If you are the melody monarch of raagas and taans, then we have the perfect competition for you. IEMPACT presents Eastern Music, where you have the chance to let the sunray of your voice reach the dreariest corners and fill them with endless light. Come, join us and let your raagas warm the heart of the audience like spring after a long winter. May the thousand lanterns of years of riyaaz light your way forward!</p>
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
                  <p>Quiz geeks ahoy! If answers tickle at the tip of your tongue, perhaps even before a question has been asked, then we have the perfect competition for you. IEMPACT presents Quizzard, where the sharpness of the sword of your knowledge will be tested as you fiercely battle against the best quizzers Kolkata has to offer. Come, join us as you pick the grains of sand on the endless shore of knowledge. May the pegasus of your GK take you to the moon!</p>
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
                  <p>If you&apos;ve always wanted to take the stand and be the change, then we have the perfect competition for you. IEMPACT presents Debate, one of the biggest war-of-words in town. Come, join us as your words find wings and reach the highest clouds. May the iron grip of your logic and mind never falter !</p>
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
                  <p>If the sequin of your voice twinkle like the stars of the most magnificent constellation when you sing Western genres, then we have the perfect competition for you. IEMPACT presents Western music, where you have the chance to be crowned the nightingale of one of the biggest voice-wars in town. Come, join us as your passion and style take the centre stage. May your voice dazzle like diamonds and reach the hearts of many!</p>
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
