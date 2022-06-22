import React from 'react';
import classes from "./InputArea.module.css";


export const InputArea = () => {
  return (
    <div className={classes.area}>
    <form>
      <label className={classes.lebel}>My Posts</label>
      <input className={classes.input} type='text'/>
    </form>
    </div>
  )
}