import React from 'react';
import classes  from '../Nav/Nav.module.css'

export const Nav = () => {
  return (
    <nav className={classes.nav}>

      <ul className={classes.item}>
        <li>Profile</li>
        <li>Message</li>
        <li className={`${classes.item} ${classes.active}`}>News</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}