import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
  return <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <div className={s.singleDialog}>
        <NavLink to={'/Dialogs/1'} rel={'no-referrer nofollow no-opener'}
                 style={(params) => {
                   return {color: params.isActive ? 'darkred' : 'darkgreen'}
                 }}>
          Oleg
        </NavLink>
      </div>
      <div className={s.singleDialog}>
        <NavLink to={'/Dialogs/2'} rel={'no-referrer nofollow no-opener'} style={(params) => {
          return {color: params.isActive ? 'darkred' : 'darkgreen'}
        }}>
          Turbo
        </NavLink>
      </div>
      <div className={s.singleDialog}>
        <NavLink to={'/Dialogs/3'} rel={'no-referrer nofollow no-opener'} style={(params) => {
          return {color: params.isActive ? 'darkred' : 'darkgreen'}
        }}>
          Morgan
        </NavLink>
      </div>
      <div className={s.singleDialog}>
        <NavLink to={'/Dialogs/4'} rel={'no-referrer nofollow no-opener'} style={(params) => {
          return {color: params.isActive ? 'darkred' : 'darkgreen'}
        }}>
          Vadim
        </NavLink>
      </div>
      <div className={s.singleDialog}>
        <NavLink to={'/Dialogs/5'} rel={'no-referrer nofollow no-opener'} style={(params) => {
          return {color: params.isActive ? 'darkred' : 'darkgreen'}
        }}>
          Алексей
        </NavLink>
      </div>
      <div className={s.singleDialog}>
        <NavLink to={'/Dialogs/6'} rel={'no-referrer nofollow no-opener'} style={(params) => {
          return {color: params.isActive ? 'darkred' : 'darkgreen'}
        }}>
          ХАН
        </NavLink>
      </div>
    </div>
    <div className={s.messagesItems}>
      <div className={s.singleMessages}>Привет! Рады видеть тебя здесь!</div>
      <div className={s.singleMessages}>Спасибо за приглашение!</div>
      <div className={s.singleMessages}>Hi bro</div>
    </div>
  </div>
}

