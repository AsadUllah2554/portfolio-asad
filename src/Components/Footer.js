import React from "react";
import "./components.css"


function Footer() {
    return (
        <footer >
            <div className='footer'>
                <div className="footer-container">
                    <div className="email-box">
                        <h1 className="md-heading ">Order your Website now !</h1>
                        <p className="sml-heading">Enter your email below, soon you will be contacted !</p>
                        <form action="" className="newsletter">
                            <input type='email' placeholder="Enter your email"
                                className="input" />
                            <button className="main-banner-btn ">Order</button></form>

                            <div className="footer-icons">
                    <a href="https://twitter.com/AsadUll89061835" target="_blank"> <i class="ri-twitter-fill icn"></i></a>
                    <a href="https://www.linkedin.com/in/asad-ullah-ab569718b/" target="_blank"><i class="ri-linkedin-box-fill icn"></i></a>
                    <a href="https://github.com/AsadUllah2554" target="_blank"><i class="ri-github-fill icn"></i></a>
                    <a href="https://github.com/AsadUllah2554" target="_blank"><i class="ri-youtube-fill icn"></i></a>
                </div>      
                    </div>


                    <div className="footer-links">

                        <div className="footer-items">
                            <ul className="links">
                                <li className="li-heading">Projects</li>
                                <li className="list-items"><a href="">E-commerce Website</a></li>
                                <li className="list-items"><a href="">Restaurant Website</a></li>
                                <li className="list-items"><a href="">Landing Page</a> </li>
                                <li className="list-items"> <a href="">Speed Typing Game</a></li>


                            </ul>
                        </div>
                        <div className="footer-items">
                            <ul className="links">
                                <li className="li-heading"><a href="">Support</a> </li>
                                <li className="list-items "><a href="">Whatsapp</a> </li>
                                <li className="list-items "><a href="">Facebook</a> </li>
                                <li className="list-items "><a href="">E-mail</a> </li>
                                <li className="list-items "><a href="">Linkedin</a> </li>

                            </ul>
                        </div>
                        <div className="footer-items">
                            <ul className="links">
                                <li className="li-heading"><a href="">Navigate</a> </li>
                                <li className="list-items "><a href="">Home</a> </li>
                                <li className="list-items "><a href="">Works</a> </li>
                                <li className="list-items "><a href="">Skills</a> </li>
                                <li className="list-items "><a href="">Contact</a> </li>

                            </ul>
                        </div>

                    </div>
                </div>

               

            </div>


            <div className="footer-end">
                

                <div className="footer-text">
                    <h4 className="footer-txt">© Asad development. All rights reserved</h4>
                </div>

            </div>
        </footer>)
}

// background image property
// background-image: url(./images/react-icon-large.png);
// background-repeat: no-repeat;
// background-position: right 75%;

export default Footer;