"use client"
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
  const [activeNavItem, setActiveNavItem] = useState(""); // State to track the active nav-item

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

  const handleNavLinkClick = (item) => {
    setActiveNavItem(item);
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

  // const handleMouseEnter = () => {
  //   if (screenWidth >= 992) {
  //     setShowDropdown(true);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (screenWidth >= 992) {
  //     setShowDropdown(false);
  //   }
  // };

  // if (screenWidth === 0) {
  //   return null;
  // }

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
                  className={`nav-link items ${
                    activeNavItem === "home" ? "active" : ""
                  }`}
                  style={{
                    color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                  }}
                  href="/Home"
                  onClick={() => handleNavLinkClick("home")}
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
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
                    className={`nav-link items ${
                      activeNavItem === "services" ? "active" : ""
                    }`}
                    style={{
                      color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                    }}
                    href="/Services"
                    onClick={() => handleNavLinkClick("services")}
                  >
                    Services
                  </Link>
                )}
              </li> */}
              <li className="nav-item">
                <Link
                  className={`nav-link items ${
                    activeNavItem === "services" ? "active" : ""
                  }`}
                  style={{
                    color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                  }}
                  href="/Services"
                  onClick={() => handleNavLinkClick("services")}
                >
                  Services
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link items ${
                    activeNavItem === "Blogs" ? "active" : ""
                  }`}
                  style={{
                    color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                  }}
                  href="/Blog"
                  onClick={() => handleNavLinkClick("Blogs")}
                >
                  Blogs
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className={`nav-link items ${
                    activeNavItem === "products" ? "active" : ""
                  }`}
                  style={{
                    color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                  }}
                  href="/Products"
                  onClick={() => handleNavLinkClick("products")}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link items ${
                    activeNavItem === "contact" ? "active" : ""
                  }`}
                  style={{
                    color: `${scrollNav ? "" : "rgb(255, 237, 228)"}`,
                  }}
                  href="/Contact-us"
                  onClick={() => handleNavLinkClick("contact")}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn__header">
<Link href='/Contact-us'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Request a quote
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
