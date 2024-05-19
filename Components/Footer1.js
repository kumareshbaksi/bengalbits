import React from "react";
import "./footer1.css";
import logo1 from '@/app/assets/Frame 25.png'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

const Footer1 = () => {
  return (
    <footer className="footer1 ">
      <div className="footeer1__container container">
        <div className="first__footer">
          <div className="footerfirst1">
            <a className="navbar-brand" href="#home">
              {" "}
              <span className="nav__head">
                <span className="logo__home">
                  <Image src={logo1} alt="" className="icon__home" />
                </span>
                Bengal Bits
              </span>
            </a>
          </div>
          <div className="footerfirst2">
            <p className=''>
              Building Dreams, Crafting Excellence: Your Trusted Partners for
              Sustainable, Client-Centric Construction.
            </p>
          </div>
        </div>

        <div className="second__footer">
        <div className="footerfirst1">
            <h1>Address</h1>
          </div>
          <div className="footerfirst2">
            <p className='section__subtitle para'>
            5ES6, EAST TOWER,
Mani Casadona, Action Area I, Newtown, Kolkata, Chakpachuria, West Bengal 700160, India.
            </p>
          </div>

        </div>

        <div className="third__footer">

        <div className="footerfirst1">
            <h1>Quick Links</h1>
          </div>
          <div className="footerfirst2">
            <div className='section__subtitle para'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="privacy">Privacy Policy</a>
            </div>
          </div>

        </div>

        <div className="fourth__footer">

        <div className="footerfirst1">
            <h1>Contact Details</h1>
          </div>
          <div className="footerfirst2">
          <div className="ics">
                    <div className="section__title"><FaPhoneAlt className='ic'/></div>
                    <p className="para section__subtitle">123456879</p>
                </div>
          <div className="ics">
                    <div className="section__title">< MdOutlineMail className='ic'/></div>
                    <p className="para section__subtitle">abc@gmail,com</p>
                </div>
          </div>

        </div>

      </div>
      
    </footer>
  );
};

export default Footer1;
