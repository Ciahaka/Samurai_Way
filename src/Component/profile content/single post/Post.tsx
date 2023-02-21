import React from 'react';
import s from './Post.module.css'
import shit from '../../../multimedia/images/satan-shit.svg'
import like from '../../../multimedia/images/fuck.svg'

export type PostPropsType = {
  message: string
  likesCount: number
}
export const Post = (props: PostPropsType) => {
  const {message, likesCount} = props
  return (
    <div >
      <img className={s.avatarImage} src={shit} alt="shit icon"/>
      {message}
        <div className={s.span}>
          {likesCount}
          <img className={s.likeIcon} src={like} alt="like icon"/>
        </div>

    </div>

  )
}

