import React from 'react';
import s from './Header.module.css'
export const Header = () =>{
  return <div className={s.header}>
    <a href='#' target="_blank">
      <img src=" " alt='logo'/>
    </a>
    <button>login</button>
  </div>
}