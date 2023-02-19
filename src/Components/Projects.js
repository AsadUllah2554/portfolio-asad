import React from "react";

import "./components.css"



function Projects() { 


    return(<div class="project-grid">
    <div class="project-card">
        <img src="images/screenshots/iPhoneHub1.png" alt="" className="grid--images"/>
      <h2>iPhone Hub</h2>
      <p>iPhone Hub is a React based e-commerce store</p>
      <p> Visit at <a href="https://iphonehubstore.netlify.app" target="_blank" className="light-yellow"> Meme Generator</a></p>
    </div>
  
    <div class="project-card">
    <img src="images/screenshots/FoodFun1.png" alt="" className="grid--images"/>
      <h2>Food Fun</h2>
      <p>Food Fun is a HTML, CSS, JS based Restaurant website</p>
      <p> Visit at <a href="https://max-food.netlify.app" target="_blank" className="light-yellow"> Food Fun</a></p>
    </div>
  
    <div class="project-card">
    <img src="images/screenshots/SpeedTypingGame.png" alt="" className="grid--images"/>
      <h2>Speed Typing Game</h2>
      <p>It is a typing speed checker app created in React</p>
      <p> Visit at <a href="https://speed-typing-dev.netlify.app" target="_blank" className="light-yellow"> Speed Typing Game</a></p>
    </div>
  
    <div class="project-card">
    <img src="images/screenshots/PicSome.png" alt="" className="grid--images "/>
      <h2>PicSome</h2>
      <p>It is React based Images e-commerce store UI</p>
      <p> Visit at <a href="https://aestheticregimegym.netlify.app/" target="_blank" className="light-yellow"> PicSome</a></p>
    </div>
  </div>)
}

export default Projects