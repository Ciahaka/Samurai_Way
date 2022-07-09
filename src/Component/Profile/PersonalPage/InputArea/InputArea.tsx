import React from 'react';
import classes from "./InputArea.module.css";


export const InputArea = () => {
  return (
      <div >
        <div className={classes.caption}> My Posts </div>
        <input className={classes.input}/>
      </div>
  )
}