import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from 'react-router-dom';
import {Friends} from '../friends/Friends';


export const NavBar = () => {
  return (
    <div className={s.navAside}>
      <aside className={s.aside}>
        <div className={s.navItem}>
          <NavLink to={'/Profile'} rel={'no-referrer nofollow no-opener'}
                   style={(params) => {
                     return {color: params.isActive ? 'darkred' : 'darkgreen'}
                   }}> Profile </NavLink>
          <NavLink to={'/Dialogs'} rel={'no-referrer nofollow no-opener'}
                   style={(params) => {
                     return {color: params.isActive ? 'darkred' : 'darkviolet'}
                   }}> Dialogs</NavLink>
          <NavLink to={'/Music'} rel={'no-referrer nofollow no-opener'}
                   style={(params) => {
                     return {color: params.isActive ? 'darkred' : 'darkgreen'}
                   }}>Music</NavLink>
          <NavLink to={'/Photo'} rel={'no-referrer nofollow no-opener'}
                   style={(params) => {
                     return {color: params.isActive ? 'darkred' : 'darkviolet'}
                   }}>Photo</NavLink>
        </div>
        <div className={s.navItem}>
          <NavLink to={'/Friends'} rel={'no-referrer nofollow no-opener'}
                   style={(params) => {
                     return {color: params.isActive ? 'darkred' : 'darkorange'}
                   }}>Friends</NavLink>
          <Friends/>
        </div>

      </aside>
    </div>
  )
}

