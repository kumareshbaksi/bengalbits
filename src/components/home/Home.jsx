import React from 'react'
import './home.css'
import image from '../../assets/WhatsApp Image 2024-05-11 at 09.47.43_819ef5a4.jpg'

const Home = () => {
  return (
        <div className="background-video home" id='home'>
          {/* <video autoPlay loop muted playsInline>
            <source src="https://supportsoft.com.au/web/video/banner-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <div className="image__item">
          <img src={image} alt="" className='image'/>
          </div>
          
          <div className="video-overlay"></div>
          <div className="home__container container">
                                <h1>APPLICATION DEVELOPMENT AND SOFTWARE CONSULTING FOR YOUR DIGITAL SUCCESS
                                </h1>
                                <p>Since 2013. We have been providing innovative, result-driven, and versatile digital solutions to assist businesses in connecting with their customers and scaling new heights.
                                </p>
                                <div className="action-btns text-center pt-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="home__btn">
                                    <button className='btn text-cs' href="">Contact Us</button>
                                    </div>
                                </div>
                            </div>
          </div>
      );
}

export default Home
