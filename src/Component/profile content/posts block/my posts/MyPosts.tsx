import React from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

import {PostDataType} from '../../../../state/state';

export type PostPropsType = {
  postsData: PostDataType[]
}

export const MyPosts = (props: PostPropsType) => {

  const postsElement = props.postsData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                      likesCount={p.likesCount}/>)
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

