import React from "react";
import {Link} from "react-router-dom"
import Projects from "./Projects";
import ContactForm from "./ContactMe";
import "./components.css"

function MainBody() {

    return (
        <>
        <div className="container" id="home">
            <div className="hello">
            <h1  className="main--h1">Hello.</h1>
            </div>
         <div className="container-typewriter">
         <div className="asad typed-out">
                <h1 className="main--h1">I am Asad</h1>
        </div>
         </div>
         <br />
            <div className="skill container-typewriter">
              <div className="typed-out2 "><h4 >I am Front-end React Developer</h4></div>
              <div className="typed-out2 "><h4 >I am Web Designer</h4></div>
              <div className="typed-out2 "><h4 >and Freelancer</h4></div>
            </div>
           <div className="btm"> <h2><Link to="/works" className='links nav-item '> <span className="yellow underline">Check out my Projects </span></Link></h2></div>
           <div className="main-img">
            <picture>
                <img src="/images/asad.png" alt="Developer" className="main--img" />
            </picture>
           </div>
    
         
        </div>

        <div id="projects">
        <h1 className="section--heading" >Projects</h1>
        <Projects/>
        </div>  
         <div id="contact">
        <h1 className="section--heading" >Contact Us</h1>
        <ContactForm />
        </div>   
        </>

    )
}
export default MainBody;
