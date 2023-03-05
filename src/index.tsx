import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {
  addDialogsMessage,
  addPostsMessage, rootState,
  RootStateType, subscribe,
  updateTextDialogsMessage,
  updateTextPostsMessage
} from './redux/state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const bllSetRender = (rootState:RootStateType)=>{
  root.render(
    <BrowserRouter>
      <App state={rootState}
           textForUpdate={rootState.posts.textForUpdate}
           messageValue={rootState.dialogs.dialogsMessageValue}
           addPostsMessage={addPostsMessage}
           updateTextPostsMessage={updateTextPostsMessage}
           updateTextDialogsMessage={updateTextDialogsMessage}
           addDialogsMessage={addDialogsMessage}
      />
    </BrowserRouter>
  )
}

bllSetRender(rootState)
subscribe(bllSetRender)

reportWebVitals();
