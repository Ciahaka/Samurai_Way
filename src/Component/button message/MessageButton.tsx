import React from 'react';
import s from './MessageButton.module.css'

export type ButtonType = {
  name: string
  callback: () => void
}

export const MessageButton = (props: ButtonType) => {
  const {name, callback} = props
  const onClickButtonHandler = () => {
    callback()
  }
  return(
    <div className={s.btnArea}>
      <button className={s.btn} onClick={onClickButtonHandler}>{name}</button>
    </div>

  );
};