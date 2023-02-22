import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from '../../posts block/my posts/MyPosts';
import {ProfileInfo} from '../profile info/ProfileInfo';

export const Profile = () => {
  return (
    <div className={s.section}>
      <section>
        <h1 className={s.h1}>Main Page</h1>
        <ProfileInfo/>
        <MyPosts/>

      </section>
    </div>
  )
}

