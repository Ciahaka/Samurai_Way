import React from 'react';
import s from './Profile.module.css'
import starry_sky from '../../../multimedia/images/img_for_main_content.jpg'
import {MyPosts} from '../my posts/MyPosts';

export const Profile = () => {
  return (
    <div className={s.section}>
      <section>
        <h1>main page</h1>
        <div>
          <img className={s.imgBack} src={starry_sky} alt="starry sky haze"/>
        </div>
        <div>
          <h3>Ava + Description</h3>
        </div>
       <MyPosts/>

      </section>
    </div>
  )
}

