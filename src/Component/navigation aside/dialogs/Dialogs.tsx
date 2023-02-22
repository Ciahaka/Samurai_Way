import React from 'react';
import s from './Dialogs.module.css'



export const Dialogs = () => {
  return <div className={s.dialogs} >
    <div className={s.dialogsItems}>
      <div className={s.singleDialog}>Oleg</div>
      <div className={s.singleDialog}>Turbo</div>
      <div className={s.singleDialog}>Morgan</div>
      <div className={s.singleDialog}>Vadim</div>
      <div className={s.singleDialog}>Алексей</div>
      <div className={s.singleDialog}>ХАН</div>
    </div>
    <div className={s.messagesItems}>
      <div className={s.singleMessages}>Привет! Рады видеть тебя здесь!</div>
      <div className={s.singleMessages}>Спасибо за приглашение!</div>
      <div className={s.singleMessages}>Hi bro</div>
    </div>
  </div>
}

