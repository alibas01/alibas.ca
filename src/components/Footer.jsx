import React from "react";
//import { Link } from "react-router-dom";
import "../styles/footer.scss";

export default function Footer() {
  

  return(
    <nav className='footer' >
      <ul className='footer-menu'>

        <li className='footer-item'>
          <a 
            target="_blank"
            rel="noopener noreferrer" 
            href={'https://www.linkedin.com/in/alibas01/'}
          >
            <img
            className='linkedin'
            alt='business'
            src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/linkedin.png'
            />
          </a>
        </li>

        <li className='footer-item' >
          <a 
            target="_blank"
            rel="noopener noreferrer" 
            href={'https://github.com/alibas01'}
          >
            <img
            className='github'
            alt='code'
            src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/github.png'
            />
          </a>
        </li>

        <li className='footer-item' >
          <a 
            target="_blank"
            rel="noopener noreferrer" 
            href={'https://twitter.com/AliBash01'}
          >
            <img
            className='twitter'
            alt='social'
            src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/twitter.png'
            ></img>
          </a>
        </li>

        <li className='footer-item'>
          <a href={'mailto:alibas01@gmail.com'}>
            <img
            className='email'
            alt='email'
            src='https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/mail.png'
            ></img>
          </a>
        </li>
          
      </ul>
    </nav>
  );
};