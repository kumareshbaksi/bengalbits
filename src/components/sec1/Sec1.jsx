import React from 'react'
import './sec1.css'
import { FaTelegram } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className='container sec1__container ' id='about'>
                <div className="sec-1">
                    <div className="sec-1__first">
                        <div className="section__heading">
                            <div> <span className="span-arrow">About Supportsoft Technologies</span> <img src="https://supportsoft.com.au/web/img/arro-right.svg" className="img-fluid" alt="arrow"/> </div>
                            <h2 className="font-jost">Enterprise Software And App Developers Australia</h2>
                            <p className="font-weight-bold">Supportsoft is a trusted Sydney based app and software development company that packs a decade-long experience of industry excellence. Our expert team of industry veterans can develop scalable apps and web solutions for any
                                os, device, or platform. We bring together a human-centered approach coupled with the latest industry advancements to provide custom digital solutions that fit your needs with sheer precision.</p>
                            <p>We provide custom yet bespoke development and support services to growth-focused businesses and government organizations. With Supportsoft Technologies, every part of your IT ecosystem is taken care of, be it IT consulting,
                                its implementation, or security and after maintenance-support. Our team will handle it all.</p>
                            <p>We strive to give you peace of mind with our unique and transformative digital solutions combined with the latest market trends to help you achieve maximum value for money on your IT investments.</p>

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
                                    <div className="icon-content">
                                       <span className="icon"><FaTelegram/></span>
                                       
                                      <div className="about">
                                      <h3>Complete IT Coverage</h3> <p>We have everything your IT ecosystem needs. We are not another team of a yes-man, we want the best results for you. From robust development to expert maintenance we provide all under one roof.</p>
                                      </div>
                                        </div>
                                
               
                           
                        </div>
                    


                    <div className="sec-1__2nd">
                        <div className="img-wrap">
                            <ul className="img-overlay-list">
                                <li className="list__names"> 
                                {/* <span className="fas fa-bezier-curve  bg-primary text-white rounded-circle"></span> */}
                                    <h6 className="font-jost mb-0">Unmatched UI/UX</h6>
                                </li>
                                <li className="list__names"> 
                                {/* <span className="fas fa-code bg-primary text-white rounded-circle"></span> */}
                                    <h6 className="font-jost mb-0">Robust Development</h6>
                                </li>
                                <li className="list__names"> 
                                {/* <span className="fas fa-paper-plane bg-primary text-white rounded-circle"></span> */}
                                    <h6 className="font-jost mb-0">On-time Delivery</h6>
                                </li>
                                <li className="list__names"> 
                                {/* <span className="fas fa-cog bg-primary text-white rounded-circle"></span> */}
                                    <h6 className="font-jost mb-0">Transparent Process</h6>
                                </li>
                                <li className="list__names">
                                     {/* <span className="fas fa-headphones bg-primary text-white rounded-circle"></span> */}
                                    <h6 className="font-jost mb-0">Expert Help And Support</h6>
                                </li>
                            </ul>
                            <img src="https://supportsoft.com.au/web/img/feature-img4.jpg" alt="feature image" className="img-fluid rounded-custom"/>
                        </div>


                    </div>
                
                </div>

    </section>
  )
}

export default Sec1
