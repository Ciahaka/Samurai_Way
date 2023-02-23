import React from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';
import {PostsType} from '../../../../App';

export type PostPropsType = {
  postsData: PostsType[]
}

export const MyPosts = (props:PostPropsType) => {

  const postsElement = props.postsData.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea></textarea>
      </div>
      <div className={s.btnArea}>
        <button> add New Post</button>
      </div>
      {postsElement}
    </div>
  )
}

