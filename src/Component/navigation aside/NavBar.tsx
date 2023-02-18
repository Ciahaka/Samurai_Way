import React from 'react';
import s from './NavBar.module.css'


export const NavBar = () => {
  return (
  <div className={s.navAside}>
    <aside className={s.aside}>
      <a href="src/Component#">Profile</a>
      <a href="src/Component#">Message</a>
      <a href="src/Component#">Photo</a>
    </aside>
  </div>
  )
}

