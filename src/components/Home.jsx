import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss"

import Button from "./Button";  

export default function Home(props) {  
  return(
    <div>
      <Link to='/'>
        <Button 
          text="Resume" 
          disabled={false} 
          className="--welcome"
        />
      </Link>
      <div className="dark-tiger">
          <img src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Dark-tiger2.png' />
      </div>
    </div>
  )
}