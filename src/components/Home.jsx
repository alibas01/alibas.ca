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
                  <img className="dark-tiger" alt="dtiger" src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Dark-tiger2.png' />
              </div>
        <section className="menu">
          <Link to='/resume'>
            <Button 
              text="Resumé" 
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
              text="Blog (coming soon)" 
              disabled={false} 
              className="--welcome"
            />
          </Link>
            <Button 
              text="Tuuitter (coming soon)" 
              disabled={false} 
              className="--welcome"
            />
                {/* <Button 
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