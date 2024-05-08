import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slide.css'; 

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval in milliseconds (e.g., 3000 ms = 3 seconds)
    arrows: false
  };

  return (
  <section className="container">
  <div className="slide__title section__title">
  Our Proud <span>Accolades</span>
  </div>
    <Slider className='slide container' {...settings}>
     
      <div className='items'>
        <img src="https://supportsoft.com.au/web/img/clutch.svg"/>
      </div>
      <div className='items'>
        <img src="https://supportsoft.com.au/web/img/clutch.svg"/>
      </div>
      <div className='items'>
        <img src="https://supportsoft.com.au/web/img/clutch.svg"/>
      </div>
      <div className='items'>
        <img src="https://supportsoft.com.au/web/img/clutch.svg"/>
      </div>
      <div className='items'>
        <img src="https://supportsoft.com.au/web/img/clutch.svg"/>
      </div>
    </Slider>
    </section>
  );
};

export default Slide;
