"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Logo from "./Frame 25.png";

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavLinkClick = () => {
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });
  }, [isCollapsed]);

  const handleMouseEnter = () => {
    if (screenWidth >= 992) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (screenWidth >= 992) {
      setShowDropdown(false);
    }
  };

  if (screenWidth === 0) {
    return null;
  }

  return (
    <nav
      className={`${
        scrollNav ? "bg-black animate__header" : "bg-transparent"
      } navbar navbar-expand-lg fixed-top`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <span className="nav__head">
            <span className="logo__home">
              <Image src={Logo} alt="Logo" className="icon__home" />
            </span>
            Bengal Bits
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          style={{
            backgroundColor: `${scrollNav ? "white" : "rgb(225, 186, 186)"}`,
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <div className="mx-auto">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link items"
                  style={{ color: `${scrollNav ? "" : "rgb(255, 237, 228)"}` }}
                  href="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {screenWidth >= 992 ? (
                  <NavDropdown
                    title="Services"
                    id="basic-nav-dropdown"
                    style={{
                      color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                    }}
                    show={showDropdown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown-columns">
                      <div className="column">
                        <div className="fst">
                          <div className="act1">
                            <h5>Web development</h5>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Node.js Development
                              </Link>
                            </p>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                React Development
                              </Link>
                            </p>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Angular Development
                              </Link>
                            </p>
                          </div>
                          <div className="act1">
                            <h5>App development</h5>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                iOS Development
                              </Link>
                            </p>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Android Development
                              </Link>
                            </p>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Cross-Platform Development
                              </Link>
                            </p>
                          </div>
                          <div className="act1">
                            <h5>UI/UX Design</h5>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Prototyping
                              </Link>
                            </p>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Wireframing
                              </Link>
                            </p>
                            <p>
                              <Link href="/Services" className="dropdown-item">
                                Visual Design
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavDropdown>
                ) : (
                  <Link
                    className="nav-link items"
                    style={{
                      color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                    }}
                    href="/Services"
                  >
                    Services
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link items"
                  style={{ color: `${scrollNav ? "" : "rgb(255, 237, 228)"}` }}
                  href="/Products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link items"
                  style={{ color: `${scrollNav ? "" : "rgb(255, 237, 228)"}` }}
                  href="/Contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn__header">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
