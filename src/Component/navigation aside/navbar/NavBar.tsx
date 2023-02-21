import React from 'react';
import s from './NavBar.module.css'


export const   NavBar = () => {
  return (
  <div className={s.navAside}>
    <aside className={s.aside}>
      <a href="/Profile" target={'_blank'} rel={'no-referrer nofollow no-opener'} style={{color:'green'}}>Profile</a>
      <a href="/Dialogs" target={'_blank'} rel={'no-referrer nofollow no-opener'} style={{color:'darkviolet'}}>Dialogs</a>
      <a href="/Music" target={'_blank'} rel={'no-referrer nofollow no-opener'} style={{color:'darkgreen'}}>Music</a>
      <a href="/Photo" target={'_blank'} rel={'no-referrer nofollow no-opener'} style={{color:'darkviolet'}}>Photo</a>
      <a href="/News" target={'_blank'} rel={'no-referrer nofollow no-opener'} style={{color:'darkgreen'}}>News</a>
    </aside>
  </div>
  )
}

