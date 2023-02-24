import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from '../../posts block/my posts/MyPosts';
import {ProfileInfo} from '../profile info/ProfileInfo';
import {PostDataType} from '../../../../redux/state';




export type ProfilePropsType = {
  postsData: PostDataType[]
}
export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.section}>
      <section>
        <h1 className={s.h1}>Main Page</h1>
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>

      </section>
    </div>
  )
}

