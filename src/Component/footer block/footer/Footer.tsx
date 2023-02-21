import React from 'react';
import s from './Footer.module.css'
import brut from '../../../multimedia/images/icons8-брут.svg'
import rik from '../../../multimedia/images/icons8-рик-санчес.svg'
import turtl from '../../../multimedia/images/icons8-черепашки-ниндзя.svg'
import bmo from '../../../multimedia/images/icons8-bmo.svg'


export const Footer = () => {
  return <div className={s.footer}>
    <footer>
      <ul>
        <li><a href="#" target="_blank"
               rel={'no-referrer nofollow no-opener'}><img src={brut} alt="Home"/>Home</a></li>
        <li><a href="/About Us" target="_blank"
               rel={'no-referrer nofollow no-opener'}> <img src={rik} alt="All Photo"/> About Us</a></li>
        <li><a href="/Project" target="_blank"
               rel={'no-referrer nofollow no-opener'}> <img src={turtl} alt="Sandbox"/>About the Project</a></li>
        <li><a href='/Contacts' target="_blank"
               rel={'no-referrer nofollow no-opener'}> <img src={bmo} alt="Contacts"/>Contacts</a></li>
      </ul>
    </footer>
  </div>
}

