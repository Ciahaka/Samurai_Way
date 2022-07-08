import React from 'react';
import classes from '../Nav/Nav.module.css'

export const Nav = () => {
  return (
    <nav className={classes.nav}>

      <ul className={classes.item}>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/dialogs">Message</a>
        </li>
        <li className={`${classes.item} ${classes.active}`}>
          <a href="/news" >News</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  )
}