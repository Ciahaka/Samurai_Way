import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';


export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <SingleDialog id={'1'} name={'Oleg'}/>
        <SingleDialog id={'2'} name={'Turbo'}/>
        <SingleDialog id={'3'} name={'Morgan'}/>
        <SingleDialog id={'4'} name={'Vadim'}/>
        <SingleDialog id={'5'} name={'Алексей'}/>
        <SingleDialog id={'6'} name={'ХАН'}/>
      </div>
      <div className={s.messagesItems}>
        <SingleMessage message={'Привет! Рады видеть тебя здесь!'}/>
        <SingleMessage message={'Спасибо за приглашение!'}/>
        <SingleMessage message={'Hi bro'}/>
      </div>
    </div>
  )

}
