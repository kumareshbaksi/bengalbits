import React from 'react'
import './sec4.css'

const Sec4 = () => {
  return (
    <section className="sec4 ">
        <div className="sec4__container container">
        <div className="sec4__heading section__title">
                <h1>Tailored Website Development</h1>
                <h5 className='section__subtitle'>A hand-picked team of web designers and developers that excels at creating websites that inform, pursue and most-importantly convert. We’re your team of website purists that are excited to learn about your goals and help you to achieve them.</h5>

                <div className="btns btns1">
               
                <button className="btn sec3__btn">learn More</button>
                <button className="btn sec3__btn">Free consultation</button>
                </div>
             
            </div>

        <div className="sec4__content">
                <div className="content__item" style={{backgroundImage:'Url(https://supportsoft.com.au/uploads/project_images/0612010288ef9b903279172358fc004f.jpg)'}}>
                  
                </div>
                <div className="content__item"  style={{backgroundImage:'url(https://supportsoft.com.au/uploads/project_images/638c383dfb959bbe5d4df77eaa243c14.jpg)'}}>
               
                </div>
                <div className="content__item"  style={{backgroundImage:'Url(https://supportsoft.com.au/uploads/project_images/4b86b45df99fd266eac9ca452627a7e9.jpg)'}}>
               
                </div>
                <div className="content__item" style={{backgroundImage:'url(https://supportsoft.com.au/uploads/project_images/130eef601e5be6b34bc49191464a4892.jpg)'}}>
               
                </div>
        </div>
               </div>
       


    </section>
  )
}

export default Sec4
