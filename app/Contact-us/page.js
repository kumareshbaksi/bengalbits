"use client"
import React from 'react'
import "../Home/contact.css"
import './contact.css'
import '../Home/home.css'
// import Logo from '@/app/assets/Frame 25.png'
// import image from '@/app/assets/image.jpg'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import image from "./image__cont.jpg"
import Logo from "./Frame 25.png"

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
          <div className="background-video home" id="home">
        {/* <video autoPlay loop muted playsInline>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        <div className="image__item">
          <Image src=
          {image} alt="" className="image"/>
        </div>

        <div className="video-overlay"></div>
        <div className="home__container container">
          <h1>
          Get in Touch with Expert Web Developers
          </h1>
          <p>
          Our team of expert developers is ready to bring your vision to life. Reach out to us today to discuss your project and discover how we can help you succeed online.
          </p>
        </div>
      </div>


    <section className="contact" id="contact">
        <div className="container contact__container contact__cont">
          
          <div className="about__contact about__cont">
            <div className="section__title">
              <div className="cont__logo"><Image src={Logo} alt="logo" className='logo__cont'/></div>
              
              <h1 className="section__title">
                Let&apos;s work together
              </h1>
            </div>
            <p className="section__subtitle cont__subt">
            Our team of expert developers is ready to bring your vision to life. Reach out to us today to discuss your project and discover how we can help you succeed online.
            </p>
            <div className="about__divs">
              <div className="about1">
                
                <div className=" icon__contact">
                  <FaPhoneAlt className="about__icon section__title" />
                <h5 className="head">Call us</h5>
                </div>
                
                <div className="about__icon__contact"><p className="section__subtitle cont__subt">
                  Questions about your project or pricing? Call for support
                </p>
                </div>
              </div>
              <div className="about1">
                
                <div className=" icon__contact">
                <MdMessage className="about__icon section__title" />
                <h5 className="head">Chat with us</h5>
                </div>
                
                <div className="about__icon__contact"><p className="section__subtitle cont__subt">
                  Questions about your project or pricing? Call for support
                </p>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="form__contact form__cont">
            <div className="section__title form__title">
              <p>
                Fill Out The Form And Get In Touch With Us
              </p>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form1">
                <input
                  placeholder="Full Name"
                  {...register("name", { required: true })}
                  type="text"
                  className="inp-1"
                />
                <input
                  placeholder="Email"
                  {...register("email", { required: true })}
                  type="email"
                  className="inp-1"
                />
              </div>

              <div className="form2">
                <input
                  placeholder="Phone Number"
                  {...register("number", { required: true })}
                  type="phone"
                  className="inp-1"
                />
                <input
                  placeholder="Subject"
                  {...register("subject", { required: true })}
                  type="text"
                  className="inp-1"
                />
              </div>

              {/* <input placeholder='tell us about your project' {...register("about", { required: true })} type="text" className='area'/> */}
              <Controller
                name="textareaField" // Set the name for your textarea
                control={control}
                defaultValue="" // Set default value if needed
                render={({ field }) => (
                  <textarea
                    placeholder="About Your Project"
                    className="area"
                    {...field}
                  />
                )}
              />
              <input type="submit" className="submit__form" />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
