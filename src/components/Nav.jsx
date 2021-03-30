import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-clock';

// STYLESHEETS
import 'react-clock/dist/Clock.css';
import '../styles/nav.scss';


export default function Nav(props) {

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <nav className='nav' >
      <Link to='/'>
        <img
          className='navbar-logo'
          alt='home'
          src={
            'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/home-button.png'
            //'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tigeringlasses.png'
          }
        ></img>
      </Link>
      <section className='title-group'>
      <img
          className='tiger-with'
          alt='tiger'
          src={
            //'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/home-button.png'
            'https://raw.githubusercontent.com/alibas01/alibas.ca/master/public/images/tigeringlasses.png'
          }
        ></img>
      <h1 className="title">{props.title + " Page"}</h1>
      </section>
      <div className='nav-bar-actions'>
        <ul className='nav-menu'>
        <li className='nav-item'>
            <Link to={props.menu === 'Resumé' ? '/resume' : '/projects'}>
              <button className='nav-button'>{"Go to " + props.menu + " Page"}</button>
            </Link>
          </li>
          <li className='nav-item'>
            <Clock value={time} size='110' className="class2"/>
          </li>
        </ul>
      </div>
    </nav>
  )
}