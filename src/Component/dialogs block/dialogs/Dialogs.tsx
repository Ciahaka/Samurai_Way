import React from 'react';
import s from './Dialogs.module.css'
import {DialogsType, MessageType} from '../../../App';
import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';

export type DialogsPropsType = {
  dialogsData:DialogsType[]
  messageData: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElement = props.dialogsData.map((d) => <SingleDialog id={d.id} name={d.name}/>)
  const messagesElement = props.messageData.map(m => <SingleMessage id={m.id} message={m.message}></SingleMessage>)

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
