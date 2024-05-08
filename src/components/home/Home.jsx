import React from 'react'
import './home.css'

const Home = () => {
  return (
        <div className="background-video home" id='home'>
          <video autoPlay loop muted playsInline>
            <source src="https://supportsoft.com.au/web/video/banner-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
