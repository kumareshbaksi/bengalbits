"use client";
import React from "react";
import "./home.css";
import Image from "next/image";
import "./sec1.css";
import "./work.css";
import "./sec6.css";
import "./test.css";
import "./wyd.css";
import "./contact.css";
// import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import image from "./image.jpg";
import ux1 from '@/public/assets/ux1.jpg'
import ux3 from '@/public/assets/ux3.jpg'
import web from "./web.jpg";
import about1 from "@/public/assets/about1.jpg";
import about2 from "@/public/assets/about2.jpg";
import about3 from "@/public/assets/about3.jpg";
import about4 from "@/public/assets/about4.jpg";
import about5 from "@/public/assets/about5.jpg";
import about6 from "@/public/assets/about6.jpg";
import about7 from "@/public/assets/about7.jpg";
import about8 from "@/public/assets/about8.jpg";
import sec6 from "@/public/assets/sec6.jpg";
import enter from "@/public/assets/enterprise.jpg"
import { RiTeamFill } from "react-icons/ri";
import { PiNotePencilFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { AiOutlineSolution } from "react-icons/ai";
import { GrTechnology } from "react-icons/gr";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa6";
import { SiGnuprivacyguard } from "react-icons/si";
import { BsTelephoneOutboundFill } from "react-icons/bs";

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
          dots: true,
        },
      },
      {
        breakpoint: 768, // Width for small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Width for very small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          dots: true,
        },
      },
      {
        breakpoint: 768, // Width for small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Width for very small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const phoneNumber = "+91 93303 41097";

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
          <h1>Welcome to Bengal Bits</h1>
          <p>
          Transform Your Digital World: Expert Web Development, Innovative Design, and Advanced App Solutions
          </p>

          <div className="home__btn">
            <Link className="btn text-cs" href="/Contact-us">
              Consult With Our experts
            </Link>
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
                <b>What We Do Best:</b>
                <p className="section__subtitle">
                  At <span className="blue">Bengal Bits</span>, we&apos;re all
                  about building awesome websites and smart IT solutions using
                  the latest AI tech. We love finding new ways to make your
                  online presence stand out, whether it&apos;s designing a sleek
                  website or creating clever AI-driven apps. Our team is a bunch
                  of tech enthusiasts who mix creativity with tech skills to
                  give you top-notch results. We&apos;re here to make your
                  digital journey smooth and successful, from start to finish.
                  Let&apos;s team up and take your business to the next level
                  with the power of AI!
                </p>
              </div>

              <div className="content__img">
                <div className="slider__anim">
                  <span style={{ "--i": 1 }}>
                    <Image src={about1} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 2 }}>
                    <Image src={about2} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 3 }}>
                    <Image src={about3} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 4 }}>
                    <Image src={about4} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 5 }}>
                    <Image src={about5} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 6 }}>
                    <Image src={about6} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 7 }}>
                    <Image src={about7} alt="" className="work__image" />
                  </span>
                  <span style={{ "--i": 8 }}>
                    <Image src={about8} alt="" className="work__image" />
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

          <Slider className="slide container" {...settings2}>
            <div className="wyd__content">
              <Image className="img__wyd" src={web} alt="" />
              <div className="wyd_about__div">
                <h2 className="section__title"> Web Development</h2>
                <p className="section__subtitle wyd__about">
                  Website development shapes a company&apos;s online presence,
                  starting with goals, audience, and branding. Designing an
                  intuitive layout, coding for functionality across devices...
                </p>
              </div>
              <div className="home__btn wyd__btn">
                {/* <button className="btn text-cs" href="">
              Read more
              </button> */}
                <Link className="btn text-cs wyd__main" href="/Services#web">
                  Read More
                </Link>
              </div>
            </div>
            <div className="wyd__content">
              <Image className="img__wyd" src={ux3} alt="" />
              <div className="wyd_about__div">
                <h2 className="section__title"> App Development</h2>
                <p className="section__subtitle wyd__about">
                  App development blends creativity and technical skill,
                  involving idea refinement, intuitive design, coding, testing,
                  and optimization. Compatibility, security, and user
                  feedback...
                </p>
              </div>
              <div className="home__btn wyd__btn">
                {/* <button className="btn text-cs" href="">
              Read more
              </button> */}
                <Link className="btn text-cs wyd__main" href="/Services#app">
                  Read More
                </Link>
              </div>
            </div>
            <div className="wyd__content">
              <Image className="img__wyd" src={ux1} alt="" />
              <div className="wyd_about__div">
                <h2 className="section__title"> Ui/Ux Design</h2>
                <p className="section__subtitle wyd__about">
                  UI/UX design combines creativity and user understanding for
                  great digital experiences. It focuses on easy interfaces,
                  accessibility, and a strong brand look. Testing makes sure it
                  works well...
                </p>
              </div>
              <div className="home__btn wyd__btn">
                <Link className="btn text-cs wyd__main" href="/Services#ui">
                  Read More
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section className="sec1__container  container" id="about">
        <div className="main__work container">
          <div className="section__heading">
            <h2 className="section__title">
              Why Choose Us
            </h2>
            <h4 className="section__subtitle sec1__sub">
            Choose us for innovative, efficient, and standout web development that drives your success online.
            </h4>
          </div>
          <div className="sec-1">
            <div className="sec-1__first">
              <div className="icon-content">
                <span className="icon">
                  <RiTeamFill />
                </span>

                <div className="about">
                  <h3>Experienced Team:</h3>
                  <p className="section__subtitle">
                  Our skilled developers deliver top-notch web solutions tailored to your business.We create unique, user-friendly websites that reflect your brand.
                  </p>
                </div>
              </div>
              {/* <div className="icon-content">
                <span className="icon">
                <AiOutlineSolution />
                </span>

                <div className="about">
                  <h3>Custom Solutions: </h3>
                  <p className="section__subtitle">
                  We create unique, user-friendly websites that reflect your brand.

                  </p>
                </div>
              </div> */}
              <div className="icon-content">
                <span className="icon">
                <GrTechnology />
                </span>

                <div className="about">
                  <h3>Latest Technology:</h3>
                  <p className="section__subtitle">
                  We utilize cutting-edge tech to build modern, responsive, and SEO-friendly websites.
                  </p>
                </div>
              </div>
              <div className="icon-content">
                <span className="icon">
                <FaPersonCircleCheck />
                </span>

                <div className="about">
                  <h3>Client-Focused:</h3>
                  <p className="section__subtitle">
                  We prioritize your needs, ensuring a collaborative and transparent process.
                  </p>
                </div>
              </div>
              <div className="icon-content">
                <span className="icon">
                  <FaUserClock/>
                </span>

                <div className="about">
                  <h3>Timely Delivery:</h3>
                  <p className="section__subtitle">
                  We guarantee on-time project completion without sacrificing quality.

                  </p>
                </div>
              </div>
              <div className="icon-content">
                <span className="icon">
                  <SiGnuprivacyguard/>
                </span>

                <div className="about">
                  <h3>Ongoing Support:</h3>
                  <p className="section__subtitle">
                  Post-launch, we offer continuous support to keep your site secure and up-to-date.
                  </p>
                </div>
              </div>
            </div>

            <div className="sec-1__2nd">
              <div className="img-sec1">
                <Image
                  src={enter}
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="test container">
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
      </section> */}

      <section className="sec6 container">
        <div className="sec6__container container">
          <div className="col-lg-5 col-md-12 sec6__img__content">
            <div className="position-relative img__left">
              <Image src={sec6} alt="mainImg" className="main__img" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 content2">
            <div className="pt-5">
              <h2 className="section__title sec6__title">
              <span className="icon2">
              <BsTelephoneOutboundFill/>   Call Us 24/7</span>
              </h2>
              
              <p className="section__title sec6__subt1">
              +91 93303 41097
              </p>
              <p className="section__subtitle sec6__subt">
              If you are looking for the best web development services, you are in the right place. Count on the expertise of Bengal Bits for best responsive websites, beautiful web designs,advanced applications.
              </p>
              <div className="btns">
              <button className="sec6__btn" onClick={() => window.location.href = `tel:${phoneNumber}`}>Call Now</button></div>
              <div className="sec6__items">
                <li className="sec6__item">
                  <div className="me-3 icon__sec6">
                    <RiContactsFill />
                  </div>
                  <div>
                    <h4 className="item__head">2+ </h4>
                    <span>Years industry experience</span>
                  </div>
                </li>
                <li className="sec6__item">
                  <div className="me-3 icon__sec6">
                    <PiNotePencilFill />
                  </div>
                  <div>
                    <h4 className="item__head">50+</h4>
                    <span>Succesfull projects</span>
                  </div>
                </li>
                <li className="sec6__item">
                  <div className="me-3 icon__sec6">
                    <RiTeamFill />
                  </div>
                  <div>
                    <h4 className="item__head">10+</h4>
                    <span> Team members</span>
                  </div>
                </li>
                <li className="sec6__item">
                  <div className="me-3 icon__sec6">
                    <GoStarFill />
                  </div>
                  <div>
                    <h4 className="item__head">100%</h4>
                    <span>Satisfaction assured</span>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*slider here*/}

      <section className="contact" id="contact">
        <div className="container home-contact__container">
          <div className="section__title">
            <h1 className="heading__contact section__title heading__contact">
              Get in touch with<span>Us!</span>
            </h1>
          </div>
          <div className="form__home">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__contact-home">
                <div className="form1 form1__home">
                  <input
                    placeholder="Send Your Email"
                    {...register("email", { required: true })}
                    type="email"
                    className="inp-1 home__inp1"
                  />
                </div>
                <div className="form2__home">
                  <input type="submit" className="submit__form home__inp2" style={{color:"black"}}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
