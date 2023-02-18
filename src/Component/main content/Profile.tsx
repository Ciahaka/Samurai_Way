import React from 'react';
import s from './Profile.module.css'
import starry_sky from '../../multimedia/images/img_for_main_content.jpg'

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
        <div>
          <h3>My posts</h3>
          <div>New Post</div>
          <div>
            <div><p>post_1</p></div>
            <div><p>post_2</p></div>
            <div><p>post_3</p></div>
          </div>


        </div>

      </section>
    </div>
  )
}

