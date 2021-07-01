import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "react-clock";

// STYLESHEETS
import "../styles/Clock.css";
import "../styles/nav.scss";

export default function Nav(props) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="nav">
      <Link to="/">
        <span className="navbar-logo">
          <i className="fas fa-home fa-3x"></i>
        </span>
      </Link>
      <section className="title-group">
        <h1 className="title">{props.title + " Page"}</h1>
      </section>
      <div className="nav-bar-actions">
        <ul className="nav-menu">
          <li className="nav-item-link">
            <Link to={props.menu === "Resumé" ? "/resume" : "/projects"}>
              <button className="nav-button">
                {"Go to " + props.menu + " Page"}
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Clock value={time} size={120} />
            <img
              className="tiger-with"
              alt="tiger"
              src={
                //'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/home-button.png'
                "https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tigeringlasses.png"
              }
            ></img>
          </li>
        </ul>
      </div>
    </nav>
  );
}
