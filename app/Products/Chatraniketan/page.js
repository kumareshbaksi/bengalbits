"use client"
import React from "react";
import './chat.css'
import image from "@/public/assets/products.jpg";
import Image from "next/image";
import '../../Home/home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chat1 from '../../../public/assets/chat1.jpg'
import chat2 from '../../../public/assets/chat2.jpg'
import chat3 from '../../../public/assets/chat3.jpg'
const page = () => {

  
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
          Ensure effective learning with Chatraniketon
          </h1>
          <p>
          Transform your learning process to a great height. Get easy, user friendly platform to enhance capability to understand, learn things better.
          </p>
        </div>
      </div>

      <section className="product container" id="product">
        <div className="product1__cont container">
        <h1 className="pro1__head">Chatraniketon
</h1>
          <div className="product1__content">

          <div className="img__pro1">
                <div className="img__item container">
                </div>
                <div className="img__item container">
                </div>
                <div className="img__item container">
                </div>

            </div>

            <div className="pro__text1">
            
              <h2 className="section__title pro2__title">Grammar Master:</h2>
              <p className="section__subtitle pro__sub">
Grammar structures sentences clearly, aiding effective communication and understanding complex texts. Essential for writing and logical argumentation.</p>

<h2 className="section__title pro2__title">Reader&apos;s Solution:</h2>
<p className="section__subtitle pro__sub">
Knowing word meanings enhances expression, stimulates cognitive skills, and fosters lifelong learning.
</p>
<h2 className="section__title pro2__title">Evs Quiz:</h2>
<p className="section__subtitle pro__sub">
Quizzes reinforce learning, aid retention, and make learning engaging, boosting confidence and understanding.
</p>
<h2 className="section__title pro2__title">Academic Project:</h2>
<p className="section__subtitle pro__sub">
Projects enhance practical learning, research skills, creativity, and interdisciplinary understanding.
</p>
<h2 className="section__title pro2__title">Talent Booster:</h2>
<p className="section__subtitle pro__sub ">
Creativity promotes innovative problem-solving, critical thinking, and confidence, fostering independence.
</p>
<h2 className="section__title pro2__title">Ideal Guru:</h2>
<p className="section__subtitle pro__sub">
An AI mentor provides personalized, evolving learning paths, immediate feedback, and multilingual support.
</p>
<h2 className="section__title pro2__title">E-talk [Bakyalap]:</h2>
<p className="section__subtitle pro__sub">
Community chat enhances collaborative learning, diverse perspectives, and communication skills.
</p>
<h2 className="section__title pro2__title">Adventure:</h2>
<p className="section__subtitle pro__sub">
Adventure builds resilience, teamwork, and problem-solving skills, challenging students to navigate new situations.
              </p>
              <button className="btn pro__btn pro1__btn" href="">Check Out</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
