import React from 'react';
import classes from "../Post/Post.module.css";

export const Post = () => {
  return (
    <div>
      <ul className={classes.item}>
        <li>
          <img src="https://i.pinimg.com/originals/97/24/0b/97240b8fc0e2e91c67535b9d65201284.jpg" alt="Маг воды"/>
          Hello my friend!!
        </li>
      </ul>
    </div>
  )

}