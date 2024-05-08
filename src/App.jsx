import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Slide from './components/slide/Slide'
import Sec1 from './components/sec1/Sec1'
import Work from './components/work/Work'
// import Brand from './components/brands/Brand'
import Servicepage from './components/servicepage/Servicepage'
import Servicepage2 from './components/servicepage/Servicepage2'
import Sec2 from './components/sec2/Sec2'
import Sec3 from'./components/sec3/Sec3'
import Sec4 from './components/sec4/Sec4'
import Sec5 from './components/sec5/Sec5'
import Testimonial from './components/testimonials/Testimonial'
import Sec6 from './components/sec6/Sec6'
import Contact from './components/contact/Contact'
import Footer1 from './components/footer1/Footer1'
import Footer from './components/footer/Footer'

const App = () => {



  return (
	<main className="main">
		<BrowserRouter>
		<Header />
		{/* <Routes>
		<Route path='service' element={<Servicepage/>}></Route>
		</Routes> */}
		<Home/>
		<Sec1/>
		{/* <Work/> */}
		<Sec2/>
		<Sec3/>
		<Sec5/>
		<Sec4/>
		<Testimonial/>
		<Sec6/>
		<Slide/>
		<Contact/>
		<Footer1/>
		<Footer/>
		
		</BrowserRouter>
	</main>
  )
}

export default App
