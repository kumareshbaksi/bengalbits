"use client"
import React,{useState,useEffect} from 'react';
import './Header.css'; 
import logo1 from '@/app/assets/logo1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Link from 'next/link'
import { NavDropdown } from 'react-bootstrap'
import Image from 'next/image';

function NavBar() {

  const [showDropdown, setShowDropdown] = useState(false);
  const [scrollNav, setScrollNav] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(true);

  const changeNav = () =>{
    if(window.scrollY >= 80){
        setScrollNav(true)
    }
    else{
        setScrollNav(false)
    }
}
useEffect(()=>{
  window.addEventListener('scroll', changeNav)
}, [])



const toggleNavbar = () => {
  setIsCollapsed(!isCollapsed);
};

const handleNavLinkClick = () => {
  if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
    setIsCollapsed(true);
  }
};

useEffect(() => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item');
  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavLinkClick);
  });

  return () => {
    navLinks.forEach((link) => {
      link.removeEventListener('click', handleNavLinkClick);
    });
  };
}, []);

  return (
    <nav className={`${scrollNav? 'bg-light animate__header': 'bg-transparent'} 
   navbar navbar-expand-lg fixed-top`}> 
  <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          
           <span className="nav__head"><span className="logo__home">
            <Image src={logo1} alt="" className='icon__home' style={{width:"auto"}}/>
           </span>Bengal Bits</span>
           </a>
        <button className="navbar-toggler" type="button"  onClick={toggleNavbar} style={{backgroundColor:`${scrollNav? '':  'rgb(225, 186, 186)'}`}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}} href="#home" >Home</a> */}
              <Link className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}}  href="/Home">Home</Link>
            </li>
            <li className="nav-item">

              <Link className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}} 
               href="/Products">Products</Link>

            </li>
            
            <li className="nav-item">
              <NavDropdown title="Services" id="basic-nav-dropdown" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}}  show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}>
              <div className="dropdown-columns " >
                <div className="column" >
                    <div className="fst">

                    <div className="act1">
                     
                        <h5>Web development</h5>
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        
                    </div>
                    <div className="act1">
                     
                        <h5>App development</h5>
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        
                    </div>
                    <div className="act1">
                     
                        <h5>Ui/Ux Design</h5>
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        <p><Link href="/Services" className="dropdown-item">node js development</Link></p>  
                        
                    </div>
                   
                    </div>
                    {/* <div className="fst">
                    <div className="act1">
                     
                     <h5>Web dev</h5>
                     <p><Link href="/Services">node js development</Link></p>  
                     <p><Link href="/Services">node js development</Link></p>  
                     <p><Link href="/Services">node js development</Link></p>  
                     
                 </div><div className="act1">
                     
                     <h5>Web dev</h5>
                     <p><Link href="/Services">node js development</Link></p>  
                     <p><Link href="/Services">node js development</Link></p>  
                     <p><Link href="/Services">node js development</Link></p>  
                     
                 </div><div className="act1">
                     
                     <h5>Web dev</h5>
                     <p><Link href="/Services">node js development</Link></p>  
                     <p><Link href="/Services">node js development</Link></p>  
                     <p><Link href="/Services">node js development</Link></p>  
                     
                 </div>
                    
                    </div> */}
                </div>
              </div>
            </NavDropdown>
            </li>

            <li className="nav-item"> 
              <Link className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}}  href="/Blog">Blogs</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}}  href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>


  );
}

export default NavBar;
