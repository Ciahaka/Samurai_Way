import React from 'react';
import classes from "./Post/Post.module.css";
import {Post} from "./Post/Post";
import {ButtonSend} from "../ButtonSend/ButtonSend";
import {InputArea} from "../InputArea/InputArea";

export const MyPosts = () => {
  return (
    <div>
      <InputArea/>
      <ButtonSend/>
      <Post/>
    </div>
  )

}