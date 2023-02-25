import React from 'react';
import s from './NewsBar.module.css'
import {NavLink} from 'react-router-dom';
import {NewsBlock} from '../news block/NewsBlock';

export const NewsBar = () => {

  return <div className={s.newsAside}>
    <aside className={s.newsBlock}>
      <div>
        <NavLink to={'/News'} rel={'no-referrer nofollow no-opener'}
                 style={{color: 'green'}}
        >News</NavLink>
      </div>
      <div>
        <NewsBlock/>
      </div>

    </aside>
  </div>
}

