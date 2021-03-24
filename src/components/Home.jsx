import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss"

import Button from "./Button";  
import Footer from "./Footer";  

export default function Home(props) {  
  return(
    <div className="allpage">
      <h1>WELCOME TO ALIBAS.CA</h1>
      <Link to='/'>
        <Button 
          text="Resume" 
          disabled={false} 
          className="--welcome"
        />
      </Link>
      <div className="tiger">
          <img className="dark-tiger" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Dark-tiger2.png' />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}