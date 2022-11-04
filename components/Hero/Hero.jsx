import React from 'react'
import HeroBG from '../../public/images/herobg.jpg'

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero-container'>
        <div
          id='heroCarousel'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
          data-bs-interval='5000'
        >
          <ol
            id='hero-carousel-indicators'
            className='carousel-indicators'
            hidden
          ></ol>

          <div className='carousel-inner' role='listbox'>
            <div
              className='carousel-item active'
              style={{ backgroundImage: 'url(./images/herobg.jpg)' }}
            >
              <div className='carousel-container'>
                <div className='container'>
                  <h2
                    className='animate__animated animate__fadeInDown'
                    data-aos='fade-down'
                    data-aos-delay='400'
                  >
                    {/* <img height="300rem" src="MUN_Logo.png" alt="mun logo" /> */}
                  </h2>
                  {/* <h2 data-aos="fade-up" data-aos-delay="400">
                    WELCOME TO IEMPACT
                  </h2>

                  <a
                   
                    className="btn-get-started scrollto animate__animated animate__fadeInUp"
                  >
                    Coming Soon
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
