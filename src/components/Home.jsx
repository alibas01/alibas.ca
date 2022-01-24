import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

import Button from "./Button";
import Footer from "./Footer";

export default function Home(props) {
  const [value, setValue] = useState("");

  const reset = function () {
    setTimeout(() => {
      setValue("");
    }, 500);
  };

  return (
    <div className="allpage">
      <h1>Welcome to my personal page!</h1>
      <div className="search-box">
        <form
          action="https://www.google.com/search"
          className="searchform"
          method="get"
          name="searchform"
          target="_blank"
        >
          <input
            autocomplete="on"
            className="form-control search form-control-lg"
            name="q"
            value={value}
            onChange={(value) => setValue(value.target.value)}
            placeholder="Search in Google"
            //required="required"
            type="text"
          />
          <Button
            className="--submit"
            type="submit"
            text="Search"
            onClick={reset}
          />
        </form>
      </div>
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
          <Link to="/minesweeper">
            <Button text="MineSweeper" disabled={false} className="--welcome" />
          </Link>
          <Link to="/mywordle">
            <Button text="MyWordle" disabled={false} className="--welcome" />
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://interview-scheduler-ali.netlify.app/"
          >
            <Button
              text="Interview - Scheduler"
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
