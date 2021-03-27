import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss"

import Button from "./Button";  
import Footer from "./Footer"; 
import Nav from "./Nav"; 

export default function Resume(props) {  
  return(
    <div className="allpage">
      <Nav title="Resumé" menu="Projects"/>
      <section className="yazi">
        <h3>Hello, I am Ali and
            I like coding,
            which is what I do
            in Toronto, ON.
            You can contact me by the links at the bottom of the page! Click on the resume image for pdf.
        </h3>
        {/* <a href={'mailto:alibas01@gmail.com'}>alibas01@gmail.com</a> */}
        <img className="gold-tiger" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Gold-tiger.png' />
      </section>
      <div className="resume-page">
      <a href='https://drive.google.com/file/d/1Kvo5H4sfn10z1jT_iAqNp3ZVk6ff0znD/view?usp=sharing'>
        <img
          className='resume-logo'
          alt='home'
          src={
            'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Resume.png'
            //'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tigeringlasses.png'
          }
        ></img>
      </a>
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}