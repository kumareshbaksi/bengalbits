import React from 'react'
import './sec1.css'
import { FaTelegram } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className='container sec1__container ' id='about'>
                        <div className="section__heading">
                            <h2 className="font-jost">Enterprise Software And App Developers Australia</h2>
                        </div>
                <div className="sec-1">
                    <div className="sec-1__first">
                                    <div className="icon-content">
                                       <span className="icon"><FaTelegram/></span>
                                       
                                      <div className="about">
                                      <h3>Complete IT Coverage</h3> <p>We have everything your IT ecosystem needs. We are not another team of a yes-man, we want the best results for you. From robust development to expert maintenance we provide all under one roof.</p>
                                      </div>
                                        </div>
                                    <div className="icon-content">
                                       <span className="icon"><FaTelegram/></span>
                                       
                                      <div className="about">
                                      <h3>Complete IT Coverage</h3> <p>We have everything your IT ecosystem needs. We are not another team of a yes-man, we want the best results for you. From robust development to expert maintenance we provide all under one roof.</p>
                                      </div>
                                        </div>
                                    <div className="icon-content">
                                       <span className="icon"><FaTelegram/></span>
                                       
                                      <div className="about">
                                      <h3>Complete IT Coverage</h3> <p>We have everything your IT ecosystem needs. We are not another team of a yes-man, we want the best results for you. From robust development to expert maintenance we provide all under one roof.</p>
                                      </div>
                                        </div>
                                
               
                           
                        </div>
                    


                    <div className="sec-1__2nd">
                        <div className="img-wrap">
                            <img src="https://supportsoft.com.au/web/img/feature-img4.jpg" alt="feature image" className="img-fluid rounded-custom"/>
                        </div>


                    </div>
                
                </div>

    </section>
  )
}

export default Sec1
