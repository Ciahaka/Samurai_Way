import React from 'react';
import s from './Footer.module.css'


export const Footer = () => {
  return <div className={s.footer}>
    <footer>
      <ul>
        <li><a href="src/Component#" target="_blank"><img src="src/Component" alt="Home"/>Home</a></li>
        <li><a href="src/Component#" target="_blank"> <img src="src/Component" alt="All Courses"/> All Courses</a></li>
        <li><a href="src/Component#" target="_blank"> <img src="src/Component" alt="Sandbox"/>Sandbox</a></li>
        <li><a href="src/Component#" target="_blank"> <img src="src/Component" alt="Contacts"/>Contacts</a></li>
      </ul>
    </footer>
  </div>
}

