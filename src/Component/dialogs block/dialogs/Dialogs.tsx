import React from 'react';
import s from './Dialogs.module.css'

import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';
import {DialogDataType, MessageDataType} from '../../../redux/state';

export type DialogsPropsType = {
  dialogsData: DialogDataType[]
  messageData: MessageDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElement = props.dialogsData.map((d) => <SingleDialog key={d.id} id={d.id} name={d.name}/>)
  const messagesElement = props.messageData.map(m => <SingleMessage key={m.id} id={m.id}
                                                                    message={m.message}></SingleMessage>)

  return (
<div>
  <div className={s.dialogs}>
    <div className={s.dialogsElement}>
      {dialogsElement}
    </div>

    <div className={s.messagesElement}>
      {messagesElement}
    </div>
  </div>
  <div className={s.managementBlock}>
    <textarea></textarea>
    <button>Add New Message</button>
  </div>
</div>

  )

}
