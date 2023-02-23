import React from 'react';
import s from './SingleMessage.module.css'


export type SingleMessagePropsType = {
  id: string
  message: string
}
export const SingleMessage = (props: SingleMessagePropsType) => {
  const {message} = props
  return (
    <div className={s.singleMessages}>
      {message}
    </div>
  )
}