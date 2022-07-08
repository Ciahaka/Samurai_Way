import React from 'react';
import classes from "../Profile/Profile.module.css";
import {MyPost} from "./MyPosts/Posts/MyPost";
import {BackImage} from "./BackImg/BackImage";
import {Avatar} from "./Avatar/Avatar";
import {Description} from "./Description/Description";


export const Profile = () => {
  return (
    <div>
      <BackImage/>
      <Avatar/>
      <Description/>
      <MyPost/>
    </div>
  )

}