import React from 'react';
import s from './MainContent.module.css'
import starry_sky from '../../multimedia/images/img_for_main_content.jpg'

export const MainContent = () => {
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
          <h4>My posts</h4>
          <div><p>post_1</p></div>
          <div><p>post_2</p></div>
          <div><p>post_3</p></div>
        </div>

      </section>
    </div>
  )
}

