import React from 'react'
import './blog.css'
import Image from 'next/image'
// import app from "@/app/assets/app.jpg"
import Link from 'next/link'
import chat from "@public/assets/chat.jpg"

const page = () => {
  return (
    <section className="blog container">
        <div className="blog__cont container">
            <div className="card">
                
                <div className="img__cont"><Image src={chat} alt='Image' className='blog__img'/></div>
                <h2 className="section__title blog__head">How Much is a Pool Service?</h2>
                <p>March, 2024</p>
                <h3 className="section__subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia, quidem ex minima nulla voluptate odio! Aperiam, tenetur. Facere enim officia optio maiores architecto? Porro doloribus consequatur maiores reprehenderit nobis?
                </h3>
            </div>
            <div className="card">

                <div className="img__cont"><Image src={chat} alt='Image' className='blog__img'/></div>
                
                <h2 className="section__title blog__head">How Much is a Pool Service?</h2>
                <p>March, 2024</p>
                <h3 className="section__subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia, quidem ex minima nulla voluptate odio! Aperiam, tenetur. Facere enim officia optio maiores architecto? Porro doloribus consequatur maiores reprehenderit nobis?
                </h3>
            </div>
            <div className="card">

                <div className="img__cont"><Image src={chat} alt='Image' className='blog__img'/></div>
                
                <h2 className="section__title blog__head">How Much is a Pool Service?</h2>
                <p>March, 2024</p>
                <h3 className="section__subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia, quidem ex minima nulla voluptate odio! Aperiam, tenetur. Facere enim officia optio maiores architecto? Porro doloribus consequatur maiores reprehenderit nobis?
                </h3>
            </div>
        </div>
    </section>
  )
}

export default page
