import React from 'react';
import s from './ProfileInfo.module.css'
import starry_sky from '../../../../multimedia/images/img_for_main_content.jpg'
import luka from '../../../../multimedia/images/lukashenko.svg'


export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.imgBack} src={starry_sky} alt="starry sky haze"/>
      </div>
      <div className={s.profileBlock}>
        <h3>Profile Info</h3>
        <div className={s.infoBlock}>
          <img className={s.avaIcon} src={luka} alt="luka icon"/>
          <ul >
            <li>Profile Name: ХАН</li>
            <li>Age Old: 37</li>
            <li>Male: Man</li>
            <li>Interests:I love Spitz dogs </li>
          </ul>
        </div>

      </div>
    </div>


  )
}
