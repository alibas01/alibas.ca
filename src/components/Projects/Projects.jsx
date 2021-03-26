import React from "react";
import { Link } from "react-router-dom";
// import "../styles/css/welcome.css"

import Button from "../Button";  
import Footer from "../Footer"; 
import Nav from "../Nav"; 

export default function Projects(props) {  
  return(
      <div className="allpage">
      <h1 className="project-title">Projects</h1>
      <div className="buttig">
              <div className="tesla">
                  <img className="dark-tiger" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tesla.jpg' />
              </div>
        <section className="menu">
                <Button 
                  text="Home" 
                  disabled={false} 
                  className="--welcome"
                />
                <Button 
                  text="Resume" 
                  disabled={false} 
                  className="--welcome"
                />    
        </section>
        <section className="project-links">
          <article className="singleproject">
            <h4>Interview Scheduler</h4>
            <p> Lighthouse Labs Project built with React.js as a SPA</p>
          </article>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}