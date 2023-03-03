import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

import {PostDataType} from '../../../../redux/state';


export type PostPropsType = {
  postsData: PostDataType[]
}

export const MyPosts = (props: PostPropsType) => {

  const postsElement = props.postsData.map(p => <Post key={p.id} id={p.id}
                                                      message={p.message}
                                                      likesCount={p.likesCount}/>)
  const newPostElement = useRef<HTMLTextAreaElement>(null)
  const addNewPost = ()=> newPostElement.current !==null?alert(newPostElement.current.value):null


  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea ref={newPostElement} placeholder={' Расскажи свою историю!'}

        ></textarea>
        <div className={s.btnArea}>
          <button onClick={addNewPost} className={s.btn}> add New Post</button>
        </div>

      </div>
      {postsElement}

    </div>
  )
}

