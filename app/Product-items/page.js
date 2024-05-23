import React from 'react'
import '../Home/home.css'
import './product-item.css'
import image from '@/public/assets/product-item.jpg'
import Image from 'next/image'
import Link from 'next/link'
import res from '@/public/assets/pro_res.jpg'

const page = () => {
  return (

    <>
      <div className="background-video home" id="home">
        {/* <video autoPlay loop muted playsInline>
            <source src="https://supportsoft.com.au/web/video/banner-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        <div className="image__item">
          <Image src={image} alt="" className="image" />
        </div>

        <div className="video-overlay"></div>
        <div className="home__container container">
          <h1>
            APPLICATION DEVELOPMENT AND SOFTWARE CONSULTING FOR YOUR DIGITAL
            SUCCESS
          </h1>
          <p>
            Since 2013. We have been providing innovative, result-driven, and
            versatile digital solutions to assist businesses in connecting with
            their customers and scaling new heights.
          </p>
         
        </div>
      </div>


    <section className="container prodect-item">

        <div className="container product-item__cont">

            <div className="card">
                <Image className="pro-item__img" src={res} ></Image>
                <h1 className="section__title pro-item__title">Respecto</h1>
                <p className="section__subtitle pro-item__subtitle">This app is for all women to get safety in her hand. Get ready to save yourself with Respecto.</p>
                <Link href='/Products' className="btn btn__header pro-item__btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Read More</Link>
            </div>
            <div className="card">
                <Image className="pro-item__img" src={res} ></Image>
                <h1 className="section__title pro-item__title">ChatraNiketan</h1>
                <p className="section__subtitle pro-item__subtitle">This app is for all women to get safety in her hand. Get ready to save yourself with Respecto.</p>
                <Link href='/Products' className="btn btn__header pro-item__btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Read More</Link>
            </div>

          
           

        </div>

    </section>

   </>
  )
}

export default page
