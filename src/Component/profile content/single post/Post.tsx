import React from 'react';
import s from './Post.module.css'
import shit from '../../../multimedia/images/satan-shit.svg'

export const Post = () => {
  return (

    <div>
      <img className={s.avatarImage} src={shit} alt="shit icon"/>
      <p>post</p>
      <span>like</span>
    </div>

  )
}

