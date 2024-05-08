import React from 'react'
import './sec3.css'

const Sec3 = () => {
  return (
    <section className="sec3" id='project'>
        <div className="sec3__container container">
            <div className="sec3__heading section__title">
                <h1>Software Development</h1>
                <h2 className='section__subtitle'>We Create Powerful Software Solutions That Help Businesses Succeed</h2>

                <div className="btns btns1">
                <button className="btn sec3__btn">Get in touch</button>
                <button className="btn sec3__btn">learn More</button>
                </div>
             
            </div>

            <div className="sec3__content">
                <div className="img__content">
                    <img src="https://supportsoft.com.au/web/img/dashboard-img.png" alt="" />
                </div>
                <div className="text__content">
                    <h1>Softwares, 100% Tailored To your Needs</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla explicabo repellat quis molestiae aut totam libero perferendis, laborum qui provident odio illum suscipit sit neque expedita nemo eius iusto quasi vero esse impedit aperiam?</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae facilis quas officia totam tempore voluptate eveniet quidem cupiditate animi minus corporis neque eligendi dicta libero assumenda, reprehenderit in debitis accusamus. Quo libero explicabo autem.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sec3
