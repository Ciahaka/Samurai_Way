import React, {useRef} from 'react';
import s from './Dialogs.module.css'

import {SingleDialog} from '../single dialog/SingleDialog';
import {SingleMessage} from '../single message/SingleMessage';
import {DialogDataType, MessageDataType} from '../../../redux/state';
import {MessageButton} from '../../button message/MessageButton';

export type DialogsPropsType = {
  dialogsData: DialogDataType[]
  messageData: MessageDataType[]
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElement = props.dialogsData.map((d) => <SingleDialog key={d.id} id={d.id} name={d.name}/>)
  const messagesElement = props.messageData.map(m => <SingleMessage key={m.id} id={m.id}
                                                                    message={m.message}></SingleMessage>)
  const newMessageRef = useRef<HTMLTextAreaElement>(null)
  const addMessageHandler = () => newMessageRef.current !== null ?alert(newMessageRef.current.value)  : null

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsElement}>
          {dialogsElement}
        </div>
        <div className={`${s.dialogsElement} ${s.messagesElement}`}>
          {messagesElement}
        </div>
      </div>
      <div className={s.inputArea}>
        <textarea ref={newMessageRef} placeholder={' Оставь сообщение!'}></textarea>
        <MessageButton name={'Add Message'} callback={addMessageHandler}/>
      </div>
    </div>

  )

}
