import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {addPostsMessage, RootStateType} from './redux/state'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export   const bllSetRender = (rootState:RootStateType)=>{
  root.render(
    <BrowserRouter>
      <App state={rootState} addPostsMessage={addPostsMessage}
      />
    </BrowserRouter>
  )
}

reportWebVitals();