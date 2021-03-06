import React from 'react';
import classes from "./MyPost.module.css";
import {MyMessage} from "./Messages/MyMessage";
import {ButtonSend} from "../../PersonalPage/ButtonSend/ButtonSend";
import {InputArea} from "../../PersonalPage/InputArea/InputArea";



export const MyPost = () => {
  return (
    <div>
      <MyMessage message={'Как дела?'} likeCount={15} />
      <MyMessage message={'Так себе, братка!'} likeCount={2}/>
      <MyMessage message={'Что так??'} likeCount={3}/>
      <MyMessage message={'Отстаю по программе react (('} likeCount={0}/>
    </div>
  )

}