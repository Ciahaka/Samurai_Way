import React from 'react';
import classes from "./Description.module.css";

export const Description = () => {
  return (
      <div className={classes.div}>
        <div >
          <h1 className={classes.h1}> Лявон Падводны</h1>
          <h3 className={classes.h3}>
            <div>Дата рождения: 30 февраля</div>
            <div> Город: Атлантида</div>
            <div>Образование: Водолазная школа</div>
            WebSite: <a className={classes.a} href={'https://oz.by/books/more10486082.html'} target="_blank"> сthulhu.lol </a>
          </h3>
        </div>
      </div>
  )
}

