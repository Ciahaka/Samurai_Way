import React from 'react';
import s from './Header.module.css'
import logo from '../../multimedia/images/icons8-website-48.png'

export const Header = () => {
  return (
  <div className={s.headerArea}>
    <header className={s.header}>
      <a href="#" target="_blank">
        <img src={logo} alt="logo"/>
      </a>
      <div className={s.loginBlock}>
        <input type={'search'} onChange={()=>{}}/>
        <button className={`${s.btnUp} ${s.btnSearch}`}>Search</button>
        <button className={`${s.btnUp} ${s.btnIn}`}>Sign in</button>
        <button className={s.btnUp}>Sign up</button>
      </div>

    </header>

  </div>
  )
}