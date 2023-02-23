import React from 'react';
import s from './Dialogs.module.css'
import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';


export const Dialogs = () => {
  const dialogsData = [
    {id: '1', name: 'Oleg'},
    {id: '2', name: 'Turbo'},
    {id: '3', name: 'Morgan'},
    {id: '4', name: 'Vadim'},
    {id: '5', name: 'Алексей'},
    {id: '6', name: 'ХАН'},
  ]
  const messageData = [
    {id: '1', message: 'Привет! Рады видеть тебя здесь!'},
    {id: '2', message: 'Спасибо за приглашение!'},
    {id: '3', message: 'Hi bro'},
  ]

  const dialogsElement = dialogsData.map((d) => <SingleDialog id={d.id} name={d.name}/>)
  const messagesElement = messageData.map(m => <SingleMessage id={m.id} message={m.message}></SingleMessage>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>

      <div className={s.messagesItems}>
        {messagesElement}
      </div>
    </div>
  )

}
