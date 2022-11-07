import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import GDSCIEM from '../../public/images/sponsor/gdsc-iem.png'

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
                // breakpoints={{
                //     768: {
                //       // width: 768,
                //       slidesPerView: 3,
                //       spaceBetween:100,
                //     },
                //   }}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination,Autoplay]}
              >
                <SwiperSlide><div className="imgcenter"><Image src={GDSCIEM} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={GDSCIEM} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={GDSCIEM} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={GDSCIEM} className="img-fluid" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className="imgcenter"><Image src={GDSCIEM} className="img-fluid" alt="" /></div></SwiperSlide>
        
              </Swiper>
            </>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Sponsors