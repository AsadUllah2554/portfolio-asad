import React from "react";
import {useState,useRef,useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { Alert, Space } from 'antd';


function ContactForm(){

  const randomNumber= Math.ceil(Math.random()*100)

    const form = useRef();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);


    function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

    let [inputIndex,setInputIndex] =  useState(0)
    const [redBorderClass,setRedBorderClass] = useState("")
    
    const [focused,setFocused] = useState([false,false,false])
    let [shortMessage,setShortMessage] = useState(false)
    let [isLoading,setIsLoaading] = useState(false)
    let [alert,setAlert] = useState()

    const [formData, setFormData] = useState({
        
        firstName:"",
        email:"",
        message:"",
    })

    const errorMessage = {
        
        error:"Required",
        messageError:"Must be at least 25 characters",
    }

    let successAlert =      <Space         
                      direction="vertical"
                      style={{
                      width: '100%',
                              }} >     
                        <Alert
                        message="All good!"
                        description={`Thanks for your submission ${formData.firstName}`}
                        type="success"
                          showIcon
                          closable
                        />
                      </Space> 
                      
    let failAlert =      <Space         
                      direction="vertical"
                      style={{
                      width: '100%',
                              }} >     
                        <Alert
                        message="Oops"
                        description="Something went wrong, please try again later"
                        type="error"
                          showIcon
                          closable
                        />
                      </Space> 
    let loadingAnimation = <div className="lds-ring"><div></div><div></div><div></div><div></div></div> 
                      

    function onBlur(data,index){

       if(data.length === 0){
       
        setFocused(focused=>({
            ...focused,
            [index]: true
         }))
         
        setRedBorderClass("red-border")
       }}

       function onFocus(i){
       
        setInputIndex(i)
       }
       useEffect(() => {
   

        switch(inputIndex){
            case 0:
        
                if(formData.firstName.length != 0){
         
                    setFocused(focused=>({
                        ...focused,
                        [inputIndex]: false
                     }))
                      
                     break  }
             case 1:   
   
             if(formData.email.length != 0){
               
                      setFocused(focused=>({
                          ...focused,
                          [inputIndex]: false
                       }))
                       break   }   
              case 2:   
 
              if(formData.message.length != 0){
   
                 setFocused(focused=>({
                     ...focused,
                     [inputIndex]: false
                  }))
                  
                break }}
  
        }
    
    , [formData.firstName.length, formData.email.length,formData.message.length]);
  
    const sendEmail = (e) => {
      setAlert(successAlert)
        e.preventDefault();
        if(formData.firstName.length && formData.email.length && formData.message.length !=0){
        setIsLoaading(true)
    
        emailjs.sendForm('service_grj07xy', 'template_qsbukju', form.current, 'UiGv08LxO6Iy57UmO')
          .then((result) => {
            // loadingEffect()
            setIsLoaading(false)
            if(randomNumber % 2 == 0){
              setAlert(successAlert)
            }
            else{
              setAlert(failAlert)
            }
            
        
          }, (error) => {
              console.log(error.text);
          });

          setFormData({
            firstName:"",
            email:"",
            message:"",
          }
          )
        }
         
      };

// function loadingEffect(){
//   if(formData.firstName.length && formData.email.length && formData.message.length !=0){
//         setIsLoaading(true)
//         setTimeout(() => {
//         setIsLoaading(false)
//         successAlert
//         }, "2000")
//       }
//     }
      

    function handleChange(event){
        // It is good practice to destruct event object and pull out the value you need to use instead of [event.target.name] : event.target.value
        const {name,value,type,checked } = event.target
       setFormData(prevData=>{
        return{
            ...prevData,
            [name] : type ==="checkbox" ? checked : value, 
        }
       })

       if(event.target.name =="email"){
       if (!isValidEmail(event.target.value)) {
        setError('Invalid email address');
      } else {
        setError(null);
      }
  
      setEmail(event.target.value);
    }
    if(event.target.name =="message"){
        if(formData.message.length <25){
            setShortMessage(true)

        }else if(formData.message.length >=25){
            setShortMessage(false)

        }
    }
}

    function checkInputs(){
        switch(inputIndex){
            case 0:
               
                if(formData.firstName.length == 0){
                     
                    setFocused(focused=>({
                        ...focused,
                        [inputIndex]: true
                     }))  
                     setRedBorderClass("red-border")   
             
                       }
             case 1:   
     
             if(formData.email.length == 0){
              
            
               
                      setFocused(focused=>({
                          ...focused,
                          [inputIndex++]: true
                       }))
            
                        }   
              case 2:   
   
              if(formData.message.length == 0){
       
                 setFocused(focused=>({
                     ...focused,
                     [inputIndex]: true
                  }))
      
                  
                break }
            
                    }
            
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
           
            className={!focused[0] ? "" : redBorderClass} 
            onFocus={()=> onFocus(0)}
            onBlur={()=> onBlur(formData.firstName,0)}
            />
            {focused[0] ? <p className="error--text">{errorMessage.error}</p>: ""}
         
            <input type="email"
            placeholder="E-mail"
            name="email" 
            value={formData.email}
            onChange={handleChange}
           
            className={!focused[1] ? "" : redBorderClass}
            onFocus={()=> onFocus(1)}
            onBlur={()=> onBlur(formData.email,1)}/>

            {error && <p className="error--text">{error}</p>}

            {focused[1] ? <p className="error--text">{errorMessage.error}</p>: ""}    
        
        
            <textarea   
            name="message"
            placeholder="Type of website" 
            spellCheck="false"
            value={formData.message}
            onChange={handleChange}
            className={!focused[2] ? "input100" :`input100 ${redBorderClass}`} 
            onFocus={()=> onFocus(2)}
            onBlur={()=> onBlur(formData.message,2)}   
             />
             {focused[2] ? <p className="error--text">{errorMessage.error}</p>: ""}
             {shortMessage ? <p className="error--text">{errorMessage.messageError}</p>: ""}
  

<button className="main-banner-btn" onClick={checkInputs}>{isLoading ?loadingAnimation:"Submit"}</button>
     <br />
     <br />
      {alert}

       
   </form>   
    </div>
    </div>

   
    )
}

export default ContactForm;