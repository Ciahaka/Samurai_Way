import React from 'react';
import classes from "../Profile/Profile.module.css";
import {MyPost} from "./MyPosts/Posts/MyPost";
import {BackImage} from "./PersonalPage/BackImg/BackImage";
import {Avatar} from "./PersonalPage/Avatar/Avatar";
import {Description} from "./PersonalPage/Description/Description";
import {ButtonSend} from "./PersonalPage/ButtonSend/ButtonSend";
import {InputArea} from "./PersonalPage/InputArea/InputArea";


export const Profile = () => {
  return (
    <div className={classes.profile}>
      <BackImage/>
      <Avatar/>
      <Description />
      <InputArea/>
      <ButtonSend/>
      <MyPost/>
    </div>
  )

}