import React from 'react';
import s from './Header.module.css'
import logo from '../../multimedia/images/icons8-website-48.png'

export const Header = () => {
  return (
  <div className={s.header}>
    <header>
      <a href="#" target="_blank">
        <img src={logo} alt="logo"/>
      </a>
      <button>login</button>
    </header>

  </div>
  )
}