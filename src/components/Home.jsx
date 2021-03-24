import React from "react";
import { Link } from "react-router-dom";
// import "../styles/css/welcome.css"

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
      <div className="video-container">
        <video autoPlay="autoplay" loop>
          <source src='https://github.com/defsax/fly-fi/blob/master/frontend/public/videos/flyfi.mp4?raw=true' type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}