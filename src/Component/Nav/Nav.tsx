import React from 'react';
import classes from '../Nav/Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={classes.nav}>

      <ul className={classes.ul}>
        <li>
          <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}