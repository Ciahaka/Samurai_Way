import React from 'react';
import s from './SingleDialog.module.css'
import {NavLink} from 'react-router-dom';

export type SingleDialogPropsType = {
  id:string
  name:string
}
export const SingleDialog =(props:SingleDialogPropsType) =>{
  const{id,name} = props
  return (
    <div className={s.singleDialog} >
      <NavLink to={'/Dialogs/' + id} rel={'no-referrer nofollow no-opener'}
               style={(params) => {
                 return {color: params.isActive ? 'darkred' : 'darkgreen'}
               }}>
        {name}
      </NavLink>
    </div>

  )
}