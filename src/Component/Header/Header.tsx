import React from 'react';
import {App} from "../../App";
import classes  from "../Header/Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      {/*<h1 className={classes.h1} >Сообщество подводных людей</h1>*/}
      <img src="https://yt3.ggpht.com/ytc/AKedOLQInOfZQfNNUXTiEcPL2wC232E6jWFx1boiWaWc=s900-c-k-c0x00ffffff-no-rj"
           alt="Кусто, шарж"/>

    </header>
  )
}
