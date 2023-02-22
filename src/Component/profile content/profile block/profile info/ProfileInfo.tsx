import React from 'react';
import s from './ProfileInfo.module.css'
import starry_sky from '../../../../multimedia/images/img_for_main_content.jpg'


export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.imgBack} src={starry_sky} alt="starry sky haze"/>
      </div>
      <div>
        <h3>Ava + Description</h3>
      </div>
    </div>


  )
}
