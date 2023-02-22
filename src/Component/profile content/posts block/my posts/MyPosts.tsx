import React from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

export const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea></textarea>
      </div>
      <div className={s.btnArea}>
        <button> add New Post</button>
      </div>
      <Post message={'Привет! Что нового?!'} likesCount={15}/>
      <Post message={'Всё отлично! Как сам?'} likesCount={3}/>
      <Post message={'В порядке! Спасибо зарядке!'} likesCount={8}/>
    </div>
  )
}

