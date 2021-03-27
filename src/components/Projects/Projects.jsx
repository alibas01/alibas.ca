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
      <section className="project-links">
        <a href={'https://interview-scheduler-ali.netlify.app/'}>
          <h4>* Interview Scheduler</h4>
        </a>
            <p> Stack: React, Axios, Classnames, Normalize, Storybook, WS</p>
        <a href={'https://github.com/alibas01/tinyapp'}>
          <h4>* TinyApp</h4>
        </a>
            <p> Stack: NodeJS, Express | EJS, Bcrypt, cookie-sessions</p>
      </section>
              <div className="tesla">
                  <img className="tesla-img" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tesla.jpg' />
              </div>
      <section className="project-links">
        <a href={'https://github.com/defsax/fly-fi'}>  
          <h4>* Fly-Fi</h4>
        </a>
          <p> Stack: React, HTML, CSS, Bootstrap, Ruby, Postgres, Bcrypt, Puma, HTTParty</p>
        <a href={'https://github.com/alibas01/Aviation-Safety-Issues'}>
          <h4>* Aviation Safety Model</h4>
        </a>
          <p> NLP model on ASRS data set after going through data cleaning, data wrangling, exploratory data analysis, and some unique data visualization features. Stack: Python with Numpy, Pandas, Scipy, Seaborn, SKlearn</p>
      </section>  
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}