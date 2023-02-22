import React from 'react';
import s from './Footer.module.css'
import brut from '../../../multimedia/images/icons8-брут.svg'
import rik from '../../../multimedia/images/icons8-рик-санчес.svg'
import turtl from '../../../multimedia/images/icons8-черепашки-ниндзя.svg'
import bmo from '../../../multimedia/images/icons8-bmo.svg'
import {NavLink} from 'react-router-dom';


export const Footer = () => {
  return <div className={s.footer}>
    <footer>
      <ul>
        <li><NavLink to="/Home"
                     rel={'no-referrer nofollow no-opener'}
                     style={{color: 'darkgreen'}}>
          <img src={brut} alt="Home"/>Home</NavLink></li>
        <li><NavLink to="/About Us"
                     rel={'no-referrer nofollow no-opener'}
                     style={{color: 'darkgreen'}}>
          <img src={rik} alt="All Photo"/> About Us</NavLink></li>
        <li><NavLink to="/Project"
                     rel={'no-referrer nofollow no-opener'}
                     style={{color: 'darkgreen'}}>
          <img src={turtl} alt="Sandbox"/>About the Project</NavLink></li>
        <li><NavLink to="/Contacts"
                     rel={'no-referrer nofollow no-opener'}
                     style={{color: 'darkgreen'}}>
          <img src={bmo} alt="Contacts"/>Contacts</NavLink></li>
      </ul>
    </footer>
  </div>
}

