import React from 'react';
import s from './Footer.module.css'
import brut from '../../multimedia/images/icons8-брут.svg'
import rik from '../../multimedia/images/icons8-рик-санчес.svg'
import turtl from '../../multimedia/images/icons8-черепашки-ниндзя.svg'
import bmo from '../../multimedia/images/icons8-bmo.svg'


export const Footer = () => {
  return <div className={s.footer}>
    <footer>
      <ul>
        <li><a href="src/Component#" target="_blank"><img src={brut} alt="Home"/>Home</a></li>
        <li><a href="src/Component#" target="_blank"> <img src={rik} alt="All Courses"/> All Courses</a></li>
        <li><a href="src/Component#" target="_blank"> <img src={turtl} alt="Sandbox"/>Sandbox</a></li>
        <li><a href="src/Component#" target="_blank"> <img src={bmo} alt="Contacts"/>Contacts</a></li>
      </ul>
    </footer>
  </div>
}

