import React from 'react';
import classes from "./Description.module.css";

export const Description = () => {
  return (
      <div className={classes.desc} >
        <h1 className={classes.h1}> Лявон Падводны</h1>
        <h3>
          <div>Дата рождения: 30 февраля</div>
          <div> Город: Атлантида</div>
          <div>Образование: Водолазная школа</div>
          WebSite: <a className={classes.a} href={'https://ichthyander.lol'}> сthulhu.lol </a>
        </h3>
      </div>

  )

}