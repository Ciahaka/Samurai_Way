import React from 'react';
import s from './MyPosts.module.css'
import {Post} from '../single post/Post';

export const MyPosts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <textarea></textarea>
      <button> add New Post </button>
      <Post message ={'Привет! Что нового?!'} likesCount={15}/>
      <Post message ={'Всё отлично! Как сам?'} likesCount={3}/>
      <Post message ={'В порядке! Спасибо зарядке!'} likesCount={8}/>
    </div>
  )
}

