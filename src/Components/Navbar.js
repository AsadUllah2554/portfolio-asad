import React,{ useState,useRef,useEffect } from "react";
import { Link } from 'react-router-dom'
import Projects from "./Projects";
import ContactForm from "./ContactMe";


import "./components.css"

function Navbar() {
    const [menuClass,setMenuClass] = useState(false);
    const menuRef = useRef();
  
    function showNavBar(){
        setMenuClass(prevClass=> !prevClass)
        console.log(menuClass)
        menuRef.current.classList.toggle("open")
        console.log(menuRef.current.classList)
       
        
    }

    useEffect(() => {
        const closeMenu = event => {
            if(menuRef.current.classList[1] === "open"){
            menuRef.current.classList.remove("open")
            setMenuClass(prevClass => !prevClass)
        }
        };
        
        document.addEventListener('mousedown', closeMenu);
        return () => {
        document.removeEventListener('mousedown', closeMenu);
          
        };
      }, []);

      useEffect(() => {
        const closeMenuOnScroll = event => {
            if(menuRef.current.classList.length === 2){
            menuRef.current.classList.remove("open") 
      
            setMenuClass(prevClass => !prevClass)
        }
        };
        document.addEventListener('scroll', closeMenuOnScroll);
        return () => {
        document.removeEventListener('scroll', closeMenuOnScroll);
          
        };
      }, []);

      const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
        <nav id="nav">
            <div class="right">
                <div class="logo">
                    <h2><Link to="/" className='links'><span className="yellow ">Asad</span></Link></h2>
                </div>
                <ul class={ menuClass ? "open navbar":"navbar"} id="navv"  ref={menuRef} >
                    
                    <li onClick={()=>handleClickScroll('home')} className='links'> home </li>
                    <li onClick={()=>handleClickScroll('projects')} className='links'> projects </li>
                    <li onClick={()=>handleClickScroll('contact')} className='links'> contact me </li>
                </ul>
                <i className="ri-menu-line"  id="menu-icon"  onClick={showNavBar} ></i>
                {/* { menuClass ? "ri-menu-line":"ri-menu-line open"} */}
              
                <div className="footer-icons">
                    <a href="https://twitter.com/AsadUll89061835" target="_blank"> <i class="ri-twitter-fill icn"></i></a>
                    <a href="https://www.linkedin.com/in/asad-ullah-ab569718b/" target="_blank"><i class="ri-linkedin-box-fill icn"></i></a>
                    <a href="https://github.com/AsadUllah2554" target="_blank"><i class="ri-github-fill icn"></i></a>
                 
                </div>    
            </div>
        </nav>

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
        <i class="ri-arrow-up-line arrow icn" onClick={()=>handleClickScroll('nav')}></i>
        </div>  

      
    

        </>
    )
}

export default Navbar;