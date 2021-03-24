import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

export default function Footer() {
  

  return(
    <nav className='footer' >
      <ul className='footer-menu'>

        <li className='footer-item'>
          <a href={'https://www.linkedin.com/in/alibas01/'}>
            <img
            className='linkedin'
            alt='business'
            src='https://github.com/alibas01/alibas.ca/blob/master/public/images/linkedin.png'
            />
          </a>
        </li>

        <li className='footer-item' >
          <a href={'https://github.com/alibas01'}>
            <img
            className='github'
            alt='code'
            src='https://github.com/alibas01/alibas.ca/blob/master/public/images/linkedin.png'
            />
          </a>
        </li>

        <li className='footer-item' >
          <a href={'https://twitter.com/AliBash01'}>
            <img
            className='twitter'
            alt='social'
            src='https://github.com/alibas01/alibas.ca/blob/master/public/images/linkedin.png'
            ></img>
          </a>
        </li>

        <li className='footer-item'>
          <a href={'mailto:alibas01@gmail.com'}>
            <img
            className='email'
            alt='email'
            src='https://github.com/alibas01/alibas.ca/blob/master/public/images/Resume.png'
            ></img>
          </a>
        </li>
          
      </ul>
    </nav>
  );
};