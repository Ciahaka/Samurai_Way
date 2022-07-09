import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {

  return (
    <div className={classes.dialogUnit}>

      <ul className={classes.ul}>
        <li>
          <NavLink to='/dialog' activeClassName={classes.activeLink}>Комаров</NavLink>
        </li>
        <li>
          <NavLink to='/dialog' activeClassName={classes.li}>Каючок</NavLink>
        </li>
        <li>
          <NavLink to='/dialog' activeClassName={classes.li}>Коленька</NavLink>
        </li>
        <li>
          <NavLink to='/dialog' activeClassName={classes.li}>Виталик</NavLink>
        </li>
        <li>
          <NavLink to='/dialog' activeClassName={classes.li}>Ядерный</NavLink>
        </li>
        <li>
          <NavLink to='/dialog' activeClassName={classes.li}>Гендрих</NavLink>
        </li>
        <li>
          <NavLink to='/dialog' activeClassName={classes.li}>Никита</NavLink>
        </li>
      </ul>

      <div>
        <div className={classes.messages}>Эй, где воду чистую найти??</div>
        <div className={classes.messages}>Попробуй на одном проточном озере!</div>
        <div className={classes.messages}>Ха-ха-ха!! Смешно(</div>
      </div>

    </div>
  );
};

