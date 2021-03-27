import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss"

import Button from "./Button";  
import Footer from "./Footer";  

export default function Home(props) {  
  return(
    <div className="allpage">
      <h1>Welcome to my personel page!</h1>
      <div className="buttig">
              <div className="tiger">
                  <img className="dark-tiger" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Dark-tiger2.png' />
              </div>
        <section className="menu">
          <Link to='/resume'>
            <Button 
              text="Resume" 
              disabled={false} 
              className="--welcome"
            />
          </Link>
          <Link to='/projects'>
            <Button 
              text="Projects" 
              disabled={false} 
              className="--welcome"
            />
          </Link>
          <Link to='/resume'>
            <Button 
              text="Blog" 
              disabled={false} 
              className="--welcome"
            />
          </Link>
                {/* <Button 
                  text="Tuitter" 
                  disabled={false} 
                  className="--welcome"
                />
                <Button 
                  text="Fly-Fi" 
                  disabled={false} 
                  className="--welcome"
                />      */}
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}