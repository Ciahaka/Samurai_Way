import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

import {PostDataType} from '../../../../redux/state';
import {MessageButton} from '../../../button message/MessageButton';


export type PostPropsType = {
  postsData: PostDataType[]
  addPostsMessage:(postMessage:string)=>void
}

export const MyPosts = (props: PostPropsType) => {

  const postsElement = props.postsData.map(p => <Post key={p.id} id={p.id}
                                                      message={p.message}
                                                      likesCount={p.likesCount}/>)
  const newPostElement = useRef<HTMLTextAreaElement>(null)
  const addNewPost = ()=>{
    if (newPostElement.current){
      props.addPostsMessage(newPostElement.current.value)
      newPostElement.current.value=''
    }
  }


  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea ref={newPostElement} placeholder={' Расскажи свою историю!'}></textarea>
        <MessageButton name={'add New Post'} callback={addNewPost}/>

      </div>
      {postsElement}

    </div>
  )
}

