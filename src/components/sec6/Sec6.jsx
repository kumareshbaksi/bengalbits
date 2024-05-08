import React from 'react'
import './sec6.css'

const Sec6 = () => {
  return (
    <section className="sec6">
        <div className="container sec6__container">

                    <div className="col-lg-5 col-md-12 sec6__img__content">
                        <div className="position-relative"> <img src="https://supportsoft.com.au/web/img/banner_image.png" alt="mainImg" className="main__img"/>
                            <div className="dots"> <img src="https://supportsoft.com.au/web/img/banner_dot.png" alt="dot" className="dot1"/> <img src="https://supportsoft.com.au/web/img/banner_dot.png" alt="dot" className="dot2"/> </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 content2">
                        <div className="pt-5">
                            <h2 className="section__title sec6__title">What Helps Us Stand Apart?
                            </h2>
                            <p className='section__subtitle sec6__subt'> We are a company of ingenious minds who have innovative solutions for your every software and digital transformation requirement. Over the years, Supportsoft Technologies has established a reputation as an accomplished result-driven
                                IT solutions provider that helps businesses smoothly achieve their objectives.
                                </p>
                            <ul className="sec6__items">
                                <li className="sec6__item">
                                    <div className="me-3"> <img src="https://supportsoft.com.au/web/img/icons/dw-i-1.svg" alt="icon"/> </div>
                                    <div>
                                        <h4 className="item__head">2+ </h4>
                                        <span>Years industry experience</span>
                                    </div>
                                </li>
                                <li className="sec6__item">
                                    <div className="me-3"> <img src="https://supportsoft.com.au/web/img/icons/dw-i-2.svg" className="img-fluid" alt="icon"/> </div>
                                    <div>
                                        <h4 className="item__head">50+</h4>
                                        <span>Succesfull projects</span>
                                    </div>
                                </li>
                                <li className="sec6__item">
                                    <div className="me-3"> <img src="https://supportsoft.com.au/web/img/icons/dw-i-3.svg" className="img-fluid" alt="icon"/> </div>
                                    <div>
                                        <h4 className="item__head">10+</h4>
                                        <span> Team members</span>
                                    </div>
                                </li>
                                <li className="sec6__item">
                                    <div className="me-3"> <img src="https://supportsoft.com.au/web/img/icons/dw-i-4.svg" className="img-fluid" alt="icon"/> </div>
                                    <div>
                                        <h4 className="item__head">100%</h4>
                                        <span>Satisfaction assured</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

        </div>
    </section>
  )
}

export default Sec6
