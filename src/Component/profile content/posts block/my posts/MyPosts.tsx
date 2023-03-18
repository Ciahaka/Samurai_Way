import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from '../../single post/Post';

import {ActionType, PostDataType} from '../../../../redux/state';
import {MessageButton} from '../../../button message/MessageButton';


export type PostPropsType = {
  postsData: PostDataType[]
  textForUpdate: string
  dispatch:(action:ActionType)=>void
}

export const MyPosts = (props: PostPropsType) => {

  const postsElement = props.postsData.map(p => <Post key={p.id} id={p.id}
                                                      message={p.message}
                                                      likesCount={p.likesCount}/>)

  const addNewPostHandler = () => {

    // props.addPostsMessage()
    props.dispatch({type:'ADD-POST-MESSAGE'})
  }

  const changeTextPostHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({type:'UPDATE-TEXT-POST-MESSAGE',newText:e.currentTarget.value })

  }

  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div className={s.inputArea}>
        <textarea onChange={changeTextPostHandler}
                  placeholder={' Расскажи свою историю!'}
                  value={props.textForUpdate}/>
        <MessageButton name={'add New Post'} callback={addNewPostHandler}/>

      </div>
      {postsElement}

    </div>
  )
}

