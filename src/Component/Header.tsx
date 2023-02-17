import React from 'react';
import s from './Header.module.css'


export const Header = () => {
  return <div className={s.header}>
    <header>
      <a href="#" target="_blank">
        <img src="../multimedia/images/icons8-website-48.png" alt="logo"/>
      </a>
      <button>login</button>
    </header>

  </div>
}