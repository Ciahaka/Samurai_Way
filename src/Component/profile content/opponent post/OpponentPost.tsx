import React from 'react';
import s from './OpponentPost.module.css'
import luca from '../../../multimedia/images/lukashenko.svg'
import like from '../../../multimedia/images/fuck.svg'


type PostPropsType = {
  id: number
  message: string
  likesCount: number
}
export const OpponentPost = (props: PostPropsType) => {
  const {message, likesCount} = props
  return (
    <div className={s.postsBlock}>
      <div className={s.singlePost}>
        <img className={s.avatarImage} src={luca} alt="shit icon"/>
        <div className={s.messageText}>
          {message}
        </div>
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

