import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss"

import Button from "./Button";  
import Footer from "./Footer"; 

export default function Resume(props) {  
  return(
    <div className="allpage">
      <section className="yazi">
        <h3>Hello, I am Ali and
            I like coding,
            which is what I do
            in Toronto, ON.
            You can contact me at alibas01@gmail.com
        </h3>
        <div className="tiger">
            <img className="gold-tiger" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Gold-tiger.png' />
        </div>
      </section>
      <div className="resume-page">
        <section className="menu">
                <Button 
                  text="Home" 
                  disabled={false} 
                  className="--welcome"
                />
                <Button 
                  text="Projects" 
                  disabled={false} 
                  className="--welcome"
                />
                    
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}