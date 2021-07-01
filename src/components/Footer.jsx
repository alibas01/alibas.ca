import React from "react";
//import { Link } from "react-router-dom";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <nav className="footer">
      <ul className="footer-menu">
        <li className="footer-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/alibas01/"}
          >
            <span className="icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </span>
          </a>
        </li>

        <li className="footer-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/alibas01"}
          >
            <span className="icon github">
              <i className="fab fa-github"></i>
            </span>
          </a>
        </li>

        <li className="footer-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://twitter.com/AliBash01"}
          >
            <span className="icon twitter">
              <i className="fab fa-twitter"></i>
            </span>
          </a>
        </li>

        <li className="footer-item">
          <a href={"mailto:alibas01@gmail.com"}>
            <span className="icon email">
              <i className="fas fa-envelope-square"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
