import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

import Button from "./Button";
import Footer from "./Footer";

export default function Home(props) {
  return (
    <div className="allpage">
      <h1>Welcome to my personal page!</h1>
      <div className="buttig">
        <div className="tiger">
          <img
            className="dark-tiger"
            alt="dtiger"
            src="https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/Dark-tiger2.png"
          />
        </div>
        <section className="menu">
          <Link to="/resume">
            <Button text="Resumé" disabled={false} className="--welcome" />
          </Link>
          <Link to="/projects">
            <Button text="Projects" disabled={false} className="--welcome" />
          </Link>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://plausible.io/alibas.ca"
          >
            <Button text="Statistics" disabled={false} className="--welcome" />
          </a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shrouded-tundra-39846.herokuapp.com/"
          >
          <Button
            text="Tuuitter - Blog"
            disabled={false}
            className="--welcome"
          />
          </a>
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
  );
}
