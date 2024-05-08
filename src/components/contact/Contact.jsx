import React, {useState} from 'react'
import './contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useForm , Controller} from "react-hook-form"


    
const Contact = () => {


    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    


  return (
    <section className="contact" id='contact'>
        <div className="container contact__container">
            <div className="about__contact">

                <div className='section__title'> 
                <span className="arrow">Contact Us</span> <img src="https://supportsoft.com.au/web/img/arro-right.svg" className="img-fluid" alt="arrow"/> 
                </div>
            <h1 className="heading__contact section__title">
            Get in touch <span>today!</span>
            </h1>
                <p className="section__subtitle">
                Reach out to us for your requirements and endeavor your journey to digital excellence with the right team. Our team will also help you create a lucrative MVP for attracting investors to your venture.
                </p>
<div className="about__divs">
                <div className="about1">
                    <div className="section__title"><FaPhoneAlt className='about__icon '/></div>
                    <h5 className="section__title head">Call us</h5>
                    <p className="section__subtitle">Questions about your project or pricing? Call for support</p>
                </div>
                <div className="about2">
                    <div className=" section__title"><MdMessage className='about__icon '/></div>
                    <h5 className="section__title head">Chat with us</h5>
                    <p className="section__subtitle">Our support will help you from 9am to 5pm AEDT.</p>
                </div>
                </div>
            </div>


            <div className="form__contact">
<div className="section__title form__title"><p>Fill Out The Form And We'll Be In Touch As Soon As Possible.</p></div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
<div className="form1">
            <input placeholder='Full Name' {...register("name", { required: true })} type="text" className='inp-1'/>
            <input placeholder='Email' {...register("email", { required: true })} type="email" className='inp-1' />
            </div>

<div className="form2">
            <input placeholder='Phone Number' {...register("number", { required: true })} type="phone" className='inp-1' />
            <input placeholder='Subject' {...register("subject", { required: true })} type="text" className='inp-1'/>
            </div>

            {/* <input placeholder='tell us about your project' {...register("about", { required: true })} type="text" className='area'/> */}
            <Controller
        name="textareaField" // Set the name for your textarea
        control={control}
        defaultValue="" // Set default value if needed
        render={({ field }) => (
          <textarea placeholder='About Your Project' className='area' {...field} />
        )}
      />
            <input type="submit" className='submit__form'/>
          </form>



            </div>
        </div>
    </section>
  )
}

export default Contact
