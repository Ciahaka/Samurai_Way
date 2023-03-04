import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

import {PostDataType} from '../../../../redux/state';
import {MessageButton} from '../../../button message/MessageButton';


export type PostPropsType = {
  postsData: PostDataType[]
  addPostsMessage: () => void
  textForUpdate: string
  updateTextPostsMessage: (newText: string) => void
}

export const MyPosts = (props: PostPropsType) => {

  const postsElement = props.postsData.map(p => <Post key={p.id} id={p.id}
                                                      message={p.message}
                                                      likesCount={p.likesCount}/>)
  const newPostElement = useRef<HTMLTextAreaElement>(null)
  const addNewPostHandler = () => {
    props.addPostsMessage()
  }

  const changeTextPostHandler = () => {
    if (newPostElement.current) {
      props.updateTextPostsMessage(newPostElement.current.value)
    }
  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea onChange={changeTextPostHandler}
                  ref={newPostElement}
                  placeholder={' Расскажи свою историю!'}
                  value={props.textForUpdate}/>
        <MessageButton name={'add New Post'} callback={addNewPostHandler}/>

      </div>
      {postsElement}

    </div>
  )
}

