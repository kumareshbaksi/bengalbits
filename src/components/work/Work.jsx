import React from "react";
import "./work.css";
const Work = () => {
  return (
    <section className="work work__container">
      <div className="container main__work">
        <div className="content">
          <div className="content-1">

            <span className="work__content-head span-arrow"><ul>Mobile App Development<img
              src="https://supportsoft.com.au/web/img/arro-right.svg"
              className="img-fluid"
              alt="arrow"
            /></ul>
            </span>
            <p>
              Supportsoft helps you grow your business with bespoke mobile
              applications for Android and iOS. From initial scoping to
              deployment we pay close attention to the app's stability and
              accuracy. We create mobile apps with the latest technologies and
              insights that enable us to be one of the best App Developer
              Sydney.
            </p>
<div className="flex__content">
            <div className="about__content">
            <b>Here's what we excel at:</b>
              <li>Comprehensive scoping and app strategy</li>
              <li> User centric UI/UX design</li>
              <li> Robust and scalable mobile applications</li>
              <li> Transparency and immediacy</li>
              <li> Continuous monitoring and guidance</li>
              <li> App Support and marketing</li>
            </div>
            
              <div  className="content__img"> <img src="https://supportsoft.com.au/web/img/screen/app-two-mockup.png" alt="feature tab"/> </div>
              </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Work;
