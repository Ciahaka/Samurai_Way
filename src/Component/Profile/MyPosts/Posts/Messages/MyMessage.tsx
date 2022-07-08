import React from 'react';
import classes from './MyMessage.module.css'

type MyMessageType = {
  message: string,
  likeCount: number
}

export const MyMessage: React.FC<MyMessageType> = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/originals/97/24/0b/97240b8fc0e2e91c67535b9d65201284.jpg" alt="Маг воды"/>
      {props.message}
      <div >like {props.likeCount} </div>
    </div>
  )

}