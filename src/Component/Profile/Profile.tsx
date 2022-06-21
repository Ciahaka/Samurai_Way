import React from 'react';
import classes from "../Profile/Profile.module.css";
import {MyPosts} from "./MyPosts/Posts/MyPosts";
import {BackImage} from "./BackImg/BackImage";
import {Avatar} from "./Avatar/Avatar";
import {Description} from "./Description/Description";


export const Profile = () => {
  return (
    <div className={classes.content}>
      <BackImage/>
      <Avatar/>
      <Description/>
      <MyPosts/>
    </div>
  )

}