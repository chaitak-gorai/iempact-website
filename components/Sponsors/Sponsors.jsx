import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import GDSCIEM from '../../public/images/sponsor/gdsc-iem.png'
import Banyan from '../../public/images/sponsor/banyantree.png'
import Cmirror from '../../public/images/sponsor/CMirror.png'
import Decathlon from '../../public/images/sponsor/Decathlon.png'
// import Hibao from '../../public/images/sponsor/hibao.jfif'
// import S2016 from '../../public/images/sponsor/S2016.jfif'
import Peh from '../../public/images/sponsor/peh.jpg'
const Sponsors = () => {
  return (
    <section id="clients">
      <div className="container" data-aos="zoom-in">
        <header className="section-header">
          <h3>Our Sponsors</h3>
        </header>

        <div className="clients-slider swiper colaboration">
          <div className="swiper-wrapper align-items-center">
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={40}
                breakpoints={{
                  // when window width is >= 640px
                  200: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                  
                    slidesPerView: 3,
                  },
                  1024: {
                      slidesPerView: 5,
                    },
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  reverseDirection: true,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination,Autoplay]}
              >
                <SwiperSlide><div className="imgcenter"><Image src={GDSCIEM} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={Banyan} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={Cmirror} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter1"><Image src={Decathlon} className="img-fluid" alt="" /></div></SwiperSlide>
                {/* <SwiperSlide><div className="imgcenter"><Image src={Hibao} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={S2016} className="img-fluid" alt="" /></div></SwiperSlide> */}
                <SwiperSlide><div className="imgcenter"><Image src={Peh} className="img-fluid" alt="" /></div></SwiperSlide>
                



        
              </Swiper>
            </>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Sponsors