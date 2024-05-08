// "https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg"
import React from 'react'
import './testimonial.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../slide/slide.css'; 

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval in milliseconds (e.g., 3000 ms = 3 seconds)
        arrows: false
      };

  return (
    <section className="test">
        <div className="container test__cont">
            <h1 className="heading section__title">
            What Our Clients Say About Us
            </h1>
            <h3 className="section__subtitle">
            We are all about customer service but don’t trust our words trust what our clients say about us
            </h3>


            {/* <Slider className='slide container' {...settings}>
            <div className="review container">

                <div className="reviews">
                <div className="image">
                    <img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" />
                </div>
                <div className="desc">
                    <h1 className="section__title">Russell Maddern</h1>
                    <h3 className="section__subtitle">Manager</h3>
                    <p className='section__subtitle test__subt'>Fabulous service, Excellent communication, Prompt response to requests, Reasonable fees. Highly recommended.</p>
                </div>
                </div>
                <div className="reviews">
                <div className="image">
                    <img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" />
                </div>
                <div className="desc">
                    <h1 className="section__title">Russell Maddern</h1>
                    <h3 className="section__subtitle">Manager</h3>
                    <p className='section__subtitle test__subt'>Fabulous service, Excellent communication, Prompt response to requests, Reasonable fees. Highly recommended.</p>
                </div>
                </div>
                <div className="reviews">
                <div className="image">
                    <img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" />
                </div>
                <div className="desc">
                    <h1 className="section__title">Russell Maddern</h1>
                    <h3 className="section__subtitle">Manager</h3>
                    <p className='section__subtitle test__subt'>Fabulous service, Excellent communication, Prompt response to requests, Reasonable fees. Highly recommended.</p>
                </div>
                </div>

            </div>
            </Slider> */}

<Slider className='slide container' {...settings}>
     
     <div className='items'>
        
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas atque et magnam aperiam corporis accusamus in! Quo, cumque quae.</h6>

        <div className="low">
        <span className="nav__head"><span className="logo__home"><img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" className='icon__home'/></span>Manager</span>
        </div>
        </div>
     <div className='items'>
        
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas atque et magnam aperiam corporis accusamus in! Quo, cumque quae.</h6>

        <div className="low">
        <span className="nav__head"><span className="logo__home"><img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" className='icon__home'/></span>Manager</span>
        </div>
        </div>
     <div className='items'>
        
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas atque et magnam aperiam corporis accusamus in! Quo, cumque quae.</h6>

        <div className="low">
        <span className="nav__head"><span className="logo__home"><img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" className='icon__home'/></span>Manager</span>
        </div>
        </div>
     <div className='items'>
        
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas atque et magnam aperiam corporis accusamus in! Quo, cumque quae.</h6>

        <div className="low">
        <span className="nav__head"><span className="logo__home"><img src="https://supportsoft.com.au/uploads/project_images/4b16c1eb2f65ad5edebb6559534a1379.jpg" alt="" className='icon__home'/></span>Manager</span>
        </div>
        </div>
     
     


    
   </Slider>


        </div>
    </section>
  )
}

export default Testimonial
