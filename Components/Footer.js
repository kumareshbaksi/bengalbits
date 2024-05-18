"use client"
import React,{useState} from 'react'
import {FaTwitter, FaFacebook,FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6";
import './footer.css'
// import logo from '../../assets/logo1.jpg'
import { useInView} from 'react-intersection-observer';

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold:0
  });

  if (inView !== isVisible) {
    setIsVisible(inView);
  }



  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">
            <a href="https://x.com/BitsBengal?t=aFlVASZj-RaFvTg2D-NGRg&s=09" ref={ref} className={isVisible ? "footer__social-link" : 'hide__social'}>
                <FaTwitter/>
            </a>
            <a href="
 https://www.facebook.com/profile.php?id=61555427926383
" ref={ref} className={isVisible ? "footer__social-link" : 'hide__social'}>
                <FaFacebook/>
            </a>
            <a href="#" ref={ref} className={isVisible ? "footer__social-link" : 'hide__social'}>
                <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/bengalbitsofficial?utm_source=qr&igsh=MTRxa2JiajBhZDdsMQ==" ref={ref} className={isVisible ? "footer__social-link" : 'hide__social'}>
                <FaInstagram/>
            </a>
        </div>

        <p className="footer__copyright text-cs">
            Copyright&copy;  <span>2024</span> || All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
        {/* <a className="navbar-brand" href="#home"> <span className="nav__head"><span className="logo__home"><img src={logo} alt="" className='icon__home'/></span>Bengal Bits</span></a> */}
        Designed by <span>Priyansu</span>
        </p>
        </div>
    </footer>
  )
}

export default Footer
