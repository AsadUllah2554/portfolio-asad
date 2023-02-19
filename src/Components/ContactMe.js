import React from "react";
import {useState,useRef } from 'react'
import emailjs from '@emailjs/browser';

function ContactForm(){

    const form = useRef();
    const [formData, setFormData] = useState({
        
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:"",
    })

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_grj07xy', 'template_qsbukju', form.current, 'UiGv08LxO6Iy57UmO')
          .then((result) => {
        
          }, (error) => {
              console.log(error.text);
          });

          setFormData({
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            message:"",
          }
          )
         
      };
    function handleChange(event){
        // It is good practice to destruct event object and pull out the value you need to use instead of [event.target.name] : event.target.value
        const {name,value,type,checked } = event.target
       setFormData(prevData=>{
        return{
            ...prevData,
            [name] : type ==="checkbox" ? checked : value, 
        }
       })
    }

    
    return(

    <div>

    <div className="form-container">
        <h1 className='form-heading'>Order your Website now !</h1>
        <p className='form--para'>Book your order, We will contact you ASAP for further details of the project</p>
        <form className="contact-form" onSubmit={sendEmail} ref={form}>
           
            <input type="text"
            placeholder="First Name" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required />
            
          
            <input type="text"
            placeholder="Last Name" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
          
          
            <input type="email"
            placeholder="E-mail"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required />
        
          
            <input type="text"
            placeholder="Phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange} />
          
           
            <textarea  className="input100" name="message" placeholder="Type of website" spellCheck="false"
            value={formData.message}
             onChange={handleChange}/>
            <button className="main-banner-btn">Submit</button>
        </form>
        
    </div>
    </div>
   
    )
}

export default ContactForm;