import React from 'react';
import s from './Post.module.css'
import shit from '../../../multimedia/images/satan-shit.svg'


export type PostPropsType = {
  message:string
  likesCount:number
}
export const Post = (props:PostPropsType) => {
  const {message, likesCount}=props
  return (
    <div>
      <img className={s.avatarImage} src={shit} alt="shit icon"/>
      <p>{message}</p>
      <span>{likesCount}</span>
    </div>

  )
}

