"use client";
import React from "react";
import "./home.css";
import Image from "next/image";
import image from "@/app/assets/image.jpg";
import "./sec1.css";
import "./work.css";
import "./sec6.css";
import "./test.css";
import "./wyd.css"
import { FaTelegram } from "react-icons/fa";
import "./contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import Web from "@/app/assets/web.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "@/app/assets/image1.jpg";
import Link from "next/link";

const Home = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval in milliseconds (e.g., 3000 ms = 3 seconds)
    arrows: false,
    responsive: [
      {
          breakpoint: 1024, // Width for medium devices
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768, // Width for small devices
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 480, // Width for very small devices
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval in milliseconds (e.g., 3000 ms = 3 seconds)
    arrows: false,
    responsive: [
      {
          breakpoint: 1024, // Width for medium devices
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768, // Width for small devices
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 480, // Width for very small devices
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };

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
          <div
            className="action-btns text-center pt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="home__btn">
              <button className="btn text-cs" href="">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="work work__container container">
        <div className="main__work container">
          <div className="content-1">
            <div className="section__heading">
              <h2 className="section__title">About Us</h2>
            </div>

            <div className="flex__content">
              <div className="about__content">
                <b>Here&apos;s what we excel at:</b>
                <p className="section__subtitle">
                  At <span className="blue">Bengal Bits</span>, we&apos;re all about
                  building awesome websites and smart IT solutions using the
                  latest AI tech. We love finding new ways to make your online
                  presence stand out, whether it&apos;s designing a sleek website or
                  creating clever AI-driven apps. Our team is a bunch of tech
                  enthusiasts who mix creativity with tech skills to give you
                  top-notch results. We&apos;re here to make your digital journey
                  smooth and successful, from start to finish. Let&apos;s team up and
                  take your business to the next level with the power of AI!
                </p>
              </div>

              <div className="content__img">
                <div className="slider__anim">
                  <span style={{ "--i": 1 }}>
                    <Image src={image1} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 2 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 3 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 4 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 5 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 6 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 7 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 8 }}>
                    <Image src={image} alt="" className="work__image" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wyd container">
        <div className="test__cont container">
          <h1 className="section__heading section__title">What We Do</h1>

          <Slider className='slide container' {...settings2}>

          
          <div className="wyd__content">
              <Image className="img__wyd" src={Web} alt="" />
            <h2 className="section__title"> Web Development</h2>
              <p className="section__subtitle wyd__about">
                Website development shapes a company&apos;s online presence, starting
                with goals, audience, and branding. Designing an intuitive
                layout, coding for functionality across devices...
              </p>
              <div className="home__btn wyd__btn">
              {/* <button className="btn text-cs" href="">
              Read more
              </button> */}
              <Link className="btn text-cs wyd__main" href="/Services#web">Read More</Link>
            </div>
          </div>
          <div className="wyd__content">
              <Image className="img__wyd" src={Web} alt="" />
              <h2 className="section__title"> App Development</h2>
              <p className="section__subtitle wyd__about">
              App development blends creativity and technical skill, involving idea refinement, intuitive design, coding, testing, and optimization. Compatibility, security, and user feedback...
              </p>
              <div className="home__btn wyd__btn">
              {/* <button className="btn text-cs" href="">
              Read more
              </button> */}
                            <Link className="btn text-cs wyd__main" href="/Services#app">Read More</Link>

            </div>
          </div>
          <div className="wyd__content">
              <Image className="img__wyd" src={Web} alt="" />
              <h2 className="section__title"> Ui/Ux Design</h2>
              <p className="section__subtitle wyd__about">
              UI/UX design combines creativity and user understanding for great digital experiences. It focuses on easy interfaces, accessibility, and a strong brand look. Testing makes sure it works well...
              </p>
              <div className="home__btn wyd__btn">
              <Link className="btn text-cs wyd__main" href="/Services#ui">Read More</Link>

            </div>
          </div>
          

          </Slider>
        </div>
      </section>

      <section className="sec1__container  container" id="about">
        <div className="main__work container">
          <div className="section__heading">
            <h2 className="section__title">
              Enterprise Software And App Developers Australia
            </h2>
          </div>
          <div className="sec-1">
            <div className="sec-1__first">
              <div className="icon-content">
                <span className="icon">
                  <FaTelegram />
                </span>

                <div className="about">
                  <h3>Complete IT Coverage</h3>{" "}
                  <p>
                    We have everything your IT ecosystem needs. We are not
                    another team of a yes-man, we want the best results for you.
                    From robust development to expert maintenance we provide all
                    under one roof.
                  </p>
                </div>
              </div>
              <div className="icon-content">
                <span className="icon">
                  <FaTelegram />
                </span>

                <div className="about">
                  <h3>Complete IT Coverage</h3>{" "}
                  <p>
                    We have everything your IT ecosystem needs. We are not
                    another team of a yes-man, we want the best results for you.
                    From robust development to expert maintenance we provide all
                    under one roof.
                  </p>
                </div>
              </div>
              <div className="icon-content">
                <span className="icon">
                  <FaTelegram />
                </span>

                <div className="about">
                  <h3>Complete IT Coverage</h3>{" "}
                  <p>
                    We have everything your IT ecosystem needs. We are not
                    another team of a yes-man, we want the best results for you.
                    From robust development to expert maintenance we provide all
                    under one roof.
                  </p>
                </div>
              </div>
            </div>

            <div className="sec-1__2nd">
              <div className="img-wrap">
                <img
                  src="https://supportsoft.com.au/web/img/feature-img4.jpg"
                  alt="feature image"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="test container">
        <div className="test__cont container">
          <h1 className="heading section__title">
            What Our Clients Say About Us
          </h1>
          <h3 className="section__subtitle">
            We are all about customer service but don&apos;t trust our words trust
            what our clients say about us
          </h3>

          <Slider className="slide container" {...settings}>
            <div className="items">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis voluptas atque et magnam aperiam corporis accusamus in!
                Quo, cumque quae.
              </h6>

              <div className="low">
                <span className="nav__head">
                  <span className="logo__home">
                    <img
                      src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg"
                      alt=""
                      className="icon__home"
                    />
                  </span>
                  Manager
                </span>
              </div>
            </div>
            <div className="items">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis voluptas atque et magnam aperiam corporis accusamus in!
                Quo, cumque quae.
              </h6>

              <div className="low">
                <span className="nav__head">
                  <span className="logo__home">
                    <img
                      src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg"
                      alt=""
                      className="icon__home"
                    />
                  </span>
                  Manager
                </span>
              </div>
            </div>
            <div className="items">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis voluptas atque et magnam aperiam corporis accusamus in!
                Quo, cumque quae.
              </h6>

              <div className="low">
                <span className="nav__head">
                  <span className="logo__home">
                    <img
                      src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg"
                      alt=""
                      className="icon__home"
                    />
                  </span>
                  Manager
                </span>
              </div>
            </div>
            <div className="items">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis voluptas atque et magnam aperiam corporis accusamus in!
                Quo, cumque quae.
              </h6>

              <div className="low">
                <span className="nav__head">
                  <span className="logo__home">
                    <img
                      src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg"
                      alt=""
                      className="icon__home"
                    />
                  </span>
                  Manager
                </span>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="sec6 container">
        <div className="sec6__container container">
          <div className="col-lg-5 col-md-12 sec6__img__content">
            <div className="position-relative">
              {" "}
              <img
                src="https://supportsoft.com.au/web/img/banner_image.png"
                alt="mainImg"
                className="main__img"
              />
              <div className="dots">
                {" "}
                <img
                  src="https://supportsoft.com.au/web/img/banner_dot.png"
                  alt="dot"
                  className="dot1"
                />{" "}
                <img
                  src="https://supportsoft.com.au/web/img/banner_dot.png"
                  alt="dot"
                  className="dot2"
                />{" "}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 content2">
            <div className="pt-5">
              <h2 className="section__title sec6__title">
                What Helps Us Stand Apart?
              </h2>
              <p className="section__subtitle sec6__subt">
                {" "}
                We are a company of ingenious minds who have innovative
                solutions for your every software and digital transformation
                requirement. Over the years, Supportsoft Technologies has
                established a reputation as an accomplished result-driven IT
                solutions provider that helps businesses smoothly achieve their
                objectives.
              </p>
              <ul className="sec6__items">
                <li className="sec6__item">
                  <div className="me-3">
                    {" "}
                    <img
                      src="https://supportsoft.com.au/web/img/icons/dw-i-1.svg"
                      alt="icon"
                    />{" "}
                  </div>
                  <div>
                    <h4 className="item__head">2+ </h4>
                    <span>Years industry experience</span>
                  </div>
                </li>
                <li className="sec6__item">
                  <div className="me-3">
                    {" "}
                    <img
                      src="https://supportsoft.com.au/web/img/icons/dw-i-2.svg"
                      className="img-fluid"
                      alt="icon"
                    />{" "}
                  </div>
                  <div>
                    <h4 className="item__head">50+</h4>
                    <span>Succesfull projects</span>
                  </div>
                </li>
                <li className="sec6__item">
                  <div className="me-3">
                    {" "}
                    <img
                      src="https://supportsoft.com.au/web/img/icons/dw-i-3.svg"
                      className="img-fluid"
                      alt="icon"
                    />{" "}
                  </div>
                  <div>
                    <h4 className="item__head">10+</h4>
                    <span> Team members</span>
                  </div>
                </li>
                <li className="sec6__item">
                  <div className="me-3">
                    {" "}
                    <img
                      src="https://supportsoft.com.au/web/img/icons/dw-i-4.svg"
                      className="img-fluid"
                      alt="icon"
                    />{" "}
                  </div>
                  <div>
                    <h4 className="item__head">100%</h4>
                    <span>Satisfaction assured</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*slider here*/}

      <section className="contact" id="contact">
        <div className="container contact__container">
          <div className="about__contact">
            <div className="section__title">
              <span className="arrow">Contact Us</span>{" "}
              <img
                src="https://supportsoft.com.au/web/img/arro-right.svg"
                className="img-fluid"
                alt="arrow"
              />
            </div>
            <h1 className="heading__contact section__title">
              Get in touch <span>today!</span>
            </h1>
            <p className="section__subtitle">
              Reach out to us for your requirements and endeavor your journey to
              digital excellence with the right team. Our team will also help
              you create a lucrative MVP for attracting investors to your
              venture.
            </p>
            <div className="about__divs">
              <div className="about1">
                <div className="section__title">
                  <FaPhoneAlt className="about__icon " />
                </div>
                <h5 className="section__title head">Call us</h5>
                <p className="section__subtitle">
                  Questions about your project or pricing? Call for support
                </p>
              </div>
              <div className="about2">
                <div className=" section__title">
                  <MdMessage className="about__icon " />
                </div>
                <h5 className="section__title head">Chat with us</h5>
                <p className="section__subtitle">
                  Our support will help you from 9am to 5pm AEDT.
                </p>
              </div>
            </div>
          </div>

          <div className="form__contact">
            <div className="section__title form__title">
              <p>
                Fill Out The Form And We&apos;ll Be In Touch As Soon As Possible.
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
  );
};

export default Home;
