import React from 'react';
import s from './Friends.module.css'
import shakespeare from '../../../multimedia/images/shakespeare.svg'
import luka from '../../../multimedia/images/lukashenko.svg'
import stalin from '../../../multimedia/images/stalin.svg'



export const Friends = () => {
  return <div className={s.friendsBlock}>
    <ul className={s.friendsItem}>
      <li>
        <img src={stalin} alt="stalin icon"/>
        <div>
          Turbo
        </div>

      </li>
      <li>
        <img src={luka} alt="luka icon"/>
        <div>
          ХАН
        </div>

      </li>
      <li>
        <img src={shakespeare} alt="shakespeare icon"/>
        <div>
          Алексей
        </div>

      </li>
    </ul>
  </div>
}

