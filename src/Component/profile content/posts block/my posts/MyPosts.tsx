import React from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

export const MyPosts = () => {
  const postsData = [
    {id: 1, message: 'Привет! Что нового?!', likesCount: 15},
    {id: 2, message: 'Всё отлично! Как сам?', likesCount: 3},
    {id: 3, message: 'В порядке! Спасибо зарядке!', likesCount: 8},
  ]
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea></textarea>
      </div>
      <div className={s.btnArea}>
        <button> add New Post</button>
      </div>
      <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
      <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
      <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount}/>

    </div>
  )
}

