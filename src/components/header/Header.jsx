import React,{useState,useEffect} from 'react';
import './header.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import logo from '../../assets/logo1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Servicepage from '../servicepage/Servicepage'
// import Servicepage2 from '../servicepage/Servicepage2'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function NavBar() {

  const [showDropdown, setShowDropdown] = useState(false);

  

  const [scrollNav, setScrollNav] = useState(false)
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

const [isCollapsed, setIsCollapsed] = useState(true);
const toggleNavbar = () => {
  setIsCollapsed(!isCollapsed);
};
  return (
    <nav className={`${scrollNav? 'bg-light animate__header': 'bg-transparent'} 
   navbar navbar-expand-lg fixed-top`}> 
  <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          
           <span className="nav__head"><span className="logo__home"><img src={logo} alt="" className='icon__home'/></span>Bengal Bits</span>
           </a>
        <button className="navbar-toggler" type="button"  onClick={toggleNavbar} style={{backgroundColor:`${scrollNav? '':  'rgb(225, 186, 186)'}`}}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}} href="#home" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}} href="#about">Products</a>
            </li>





            {/* <li className="nav-item">
              <a className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}} href="#work">Services</a>
            </li> */}
            <li className="nav-item">
              <NavDropdown title="Services" id="basic-nav-dropdown" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}}  show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}>
              <div className="dropdown-columns " >
                <div className="column" >
                  {/* <NavDropdown.Item href="#action/3.1" > */}
                    <div className="fst">

                    <div className="act1">
                     
                        <h5>Web dev</h5>
                        <Link to="/service">node js development
                        </Link>


                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        
                    </div>
                    
                    <div className="act1">
                        <h5>Web dev</h5>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        
                    </div>
                    
                    <div className="act1">
                        <h5>Web dev</h5>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        
                    </div>
                    

                    </div>
                    {/* </NavDropdown.Item> */}
                  {/* <NavDropdown.Item href="#action/3.2"> */}
                    <div className="fst">
                    <div className="act1">
                        <h5>Web dev</h5>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        
                    </div>
                    <div className="act1">
                        <h5>Web dev</h5>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        
                    </div>
                    <div className="act1">
                        <h5>Web dev</h5>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        <p>node js development
                        </p>
                        
                    </div>
                    
                    </div>
                  {/* </NavDropdown.Item> */}
                </div>
              </div>
            </NavDropdown>
            </li>





            <li className="nav-item"> 
              <a className="nav-link items" style={{color:`${scrollNav? '':  'rgb(255, 237, 228)'}`}} href="#contact" >Contact</a>
            </li>
          </ul>
        </div>
      </div>
     
    </nav>










// 

  );
}

export default NavBar;
