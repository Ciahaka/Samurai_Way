import React from 'react';
import s from './Footer.module.css'


export const Footer = () => {
  return <div className={s.footer}>
    <footer>
      <ul>
        <li><a href="#" target="_blank"><img src="" alt="Home"/>Home</a></li>
        <li><a href="#" target="_blank"> <img src="" alt="All Courses"/> All Courses</a></li>
        <li><a href="#" target="_blank"> <img src="" alt="Sandbox"/>Sandbox</a></li>
        <li><a href="#" target="_blank"> <img src="" alt="Contacts"/>Contacts</a></li>
      </ul>
    </footer>
  </div>
}

