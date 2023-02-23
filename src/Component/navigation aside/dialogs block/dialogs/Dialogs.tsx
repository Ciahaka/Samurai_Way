import React from 'react';
import s from './Dialogs.module.css'
import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';


export const Dialogs = () => {
  const dialogsData = [
    {id:'1', name:'Oleg'},
    {id:'2', name:'Turbo'},
    {id:'3', name:'Morgan'},
    {id:'4', name:'Vadim'},
    {id:'5', name:'Алексей'},
    {id:'6', name:'ХАН'},
  ]
  const messageData = [
    {id:'1', message:'Привет! Рады видеть тебя здесь!'},
    {id:'2', message:'Спасибо за приглашение!'},
    {id:'3', message:'Hi bro'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <SingleDialog id={dialogsData[0].id} name={dialogsData[0].name}/>
        <SingleDialog id={dialogsData[1].id} name={dialogsData[1].name}/>
        <SingleDialog id={dialogsData[2].id} name={dialogsData[2].name}/>
        <SingleDialog id={dialogsData[3].id} name={dialogsData[3].name}/>
        <SingleDialog id={dialogsData[4].id} name={dialogsData[4].name}/>
        <SingleDialog id={dialogsData[5].id} name={dialogsData[5].name}/>
      </div>

      <div className={s.messagesItems}>
        <SingleMessage id={messageData[0].id} message={messageData[0].message}/>
        <SingleMessage id={messageData[0].id} message={messageData[0].message}/>
        <SingleMessage id={messageData[0].id} message={messageData[0].message}/>
      </div>
    </div>
  )

}
