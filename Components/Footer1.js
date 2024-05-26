"use client"
import React from "react";
import "./footer1.css";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from './Frame 25.png'
import Image from "next/image";

const Footer1 = () => {
  return (
    <footer className="footer1 ">
      <div className="footeer1__container container">
        <div className="first__footer">
          <div className="footerfirst1">
            <a className="navbar-brand" href="#home">
              <span className="nav__head">
                <span className="logo__home">
                  <Image src={Logo} alt="" className="icon__home"/>
                </span>
                Bengal Bits
              </span>
            </a>
          </div>
          <div className="footerfirst2">
            <p className='section__subtitle footer__sub'>
            Creating Dreams, Crafting Excellence: Your Reliable Partners for Sustainable, Client-Centric Web development Solutions.
            </p>
          </div>
        </div>

        <div className="second__footer">
        <div className="footerfirst1">
            <h1>Address</h1>
          </div>
          <div className="footerfirst2">
            <p className='section__subtitle para'>
            Jagadishpur, Howrah, West Bengal 711114 , India
            </p>
          </div>

        </div>

        <div className="third__footer">

        <div className="footerfirst1">
            <h1>Quick Links</h1>
          </div>
          <div className="footerfirst2">
            <div className='para'>
            <ul>
           <li className="privacy__f1"><a href="#home">Home</a></li>
           <li className="privacy__f1"><a href="#about">About</a></li>
           <li className="privacy__f1"><a href="privacy">Privacy Policy</a></li>
            </ul>
            </div>
          </div>

        </div>

        <div className="fourth__footer">

        <div className="footerfirst1">
            <h1>Contact Details</h1>
          </div>
          <div className="footerfirst2 last">
          <div className="ics">
                    <div className="section__subtitle icon__foot"><FaPhoneAlt className='ic'/></div>
                    <div className="ic1">
                      <p className="para para2 section__subtitle">+91 93303 41097</p>
                    </div>
                </div>
          <div className="ics">
                    <div className="section__subtitle icon__foot">< MdOutlineMail className='ic'/></div>
                    <div className="ic1">
                    <p className="para para2 section__subtitle">bengalbitsteam@gmail.com</p>
                    </div>
                </div>
          </div>

        </div>

      </div>
      
    </footer>
  );
};

export default Footer1;
