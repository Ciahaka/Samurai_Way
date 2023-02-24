import React from 'react';
import s from './Dialogs.module.css'

import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';
import {DialogDataType, MessageDataType} from '../../../state/state';

export type DialogsPropsType = {
  dialogsData: DialogDataType[]
  messageData: MessageDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElement = props.dialogsData.map((d) => <SingleDialog key={d.id} id={d.id} name={d.name}/>)
  const messagesElement = props.messageData.map(m => <SingleMessage key={m.id} id={m.id}
                                                                    message={m.message}></SingleMessage>)

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
