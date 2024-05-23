"use client"
import React from "react";
import "./product.css";
import image from "@/public/assets/products.jpg";
import Image from "next/image";
import "../Home/home.css";
import res1 from "@/public/assets/pro_res.jpg";
import res2 from "@/public/assets/res2.jpg";
import res3 from "@/public/assets/res3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const page = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <>
      <div className="background-video home" id="home">
        {/* <video autoPlay loop muted playsInline>
            <source src="https://supportsoft.com.au/web/video/banner-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        <div className="image__item">
          <Image src={image} alt="" className="image" />
        </div>

        <div className="video-overlay"></div>
        <div className="home__container container">
          <h1>
            APPLICATION DEVELOPMENT AND SOFTWARE CONSULTING FOR YOUR DIGITAL
            SUCCESS
          </h1>
          <p>
            Since 2013. We have been providing innovative, result-driven, and
            versatile digital solutions to assist businesses in connecting with
            their customers and scaling new heights.
          </p>
        </div>
      </div>

      <section className="product container" id="product">
        <div className="product__cont container">
          <div className="product__content">

          <div className="img__pro">
            <Slider className="slide container" {...settings}>
              <div className="wyd__content">
                <Image className="img__wyd" src={res1} alt="" />
                
              </div>
              <div className="wyd__content">
                <Image className="img__wyd" src={res2} alt="" />
                
              </div>
              <div className="wyd__content">
                <Image className="img__wyd" src={res3} alt="" />
               
              </div>
            </Slider>
            </div>

            <div className="pro__text">
              <h1 className="pro__head">Respecto</h1>
              <p className="section__subtitle">
                We&apos;ve offered a system that uses a smartphone and a
                specially designed portable object with sensors to guarantee
                safety. While traveling, women feel at ease using their phones
                and other portable devices, and thanks to modern technology. It
                is simple to monitor and find them when they do so. Our novel
                approach involves using our suggested solution to send an alert
                and auto SMS to their parents and the closest police station
                regarding their current GPS position, where the actual crime has
                happened. A sustainable environment that is favorable to women
                may be created with our RESPECTO system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
