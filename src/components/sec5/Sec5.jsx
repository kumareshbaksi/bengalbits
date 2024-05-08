import React from 'react'
import './sec.css'
import { FaRegHandPointRight,FaFunnelDollar,FaCartArrowDown,FaTruck,FaBuilding } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GiHealthCapsule } from "react-icons/gi";
import { IoAirplane } from "react-icons/io5";

const Sec5 = () => {
  return (
    <section className="sec5 sec5__container container">
        <div className="sec5__heading">
            <h1 className="heading__title section__title">
            Remarkable Digital Solutions For Your Business
            </h1>
            <p className='section__subtitle'>We provide bespoke software development and digital consultancy for businesses. Your journey to a successful digital transformation starts here.</p>
            <h1 className='number'>12541255224522</h1>
<div className="serices">
<div className="service"><span className="service__content"><FaRegHandPointRight className='service__icon'/><span className='icon__content'>100% idea protection</span></span></div>
            <div className="service"><span className="service__content"><FaRegHandPointRight className='service__icon'/><span className='icon__content'>Free discovery session</span></span></div>
            <div className="service"><span className="service__content"><FaRegHandPointRight className='service__icon'/><span className='icon__content'>Get investors for MVP</span></span></div>
</div>
         


            
        </div>

        <div className="sec5__content">
            <div className="img">
                <img src="https://supportsoft.com.au/web/img/dashboard-img.png" alt="" />
            </div>

            <div className="about__img">
                <div className="img__heading">
                    <h1>Industries We Work For</h1>
                    <p>Our team has excelled in its expertise in a diverse range of industries to bring positive value to businesses and ventures.</p>
                </div>
                <div className="options">
                    <div className="opt">Finance</div>
                    <div className="opt">Educational</div>
                    <div className="opt">AdTech and Marketing</div>
                    <div className="opt">Healthcare</div>
                    <div className="opt">Logistics</div>
                    <div className="opt">Automotive</div>
                    <div className="opt">Real Estate</div>
                    <div className="opt">Travel and hospitality</div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Sec5
