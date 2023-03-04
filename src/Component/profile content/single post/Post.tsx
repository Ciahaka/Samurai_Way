import React from 'react';
import s from './Post.module.css'
import stalin from '../../../multimedia/images/stalin.svg'
import like from '../../../multimedia/images/fuck.svg'


export type PostPropsType = {
  id: string
  message: string
  likesCount: number
}
export const Post = (props: PostPropsType) => {
  const {message, likesCount} = props
  return (
    <div className={s.postsBlock}>
      <div className={s.singlePost}>
        <div className={s.messageText}>
          {message}
        </div>
        <img className={s.avatarImage} src={stalin} alt="shit icon"/>

      </div>
      <div className={s.likeBlock}>
        <div className={s.likeCount}>
          {likesCount}
        </div>
        <div>
          <img className={s.likeIcon} src={like} alt="like icon"/>
        </div>

      </div>

    </div>

  )
}

