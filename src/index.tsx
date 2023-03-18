import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType, store} from './redux/state'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const bllSetRender = (rootState: RootStateType) => {
  root.render(
    <BrowserRouter>
      <App state={rootState}
           store={store}
           textForUpdate={rootState.posts.textForUpdate}
           messageValue={rootState.dialogs.dialogsMessageValue}
           dispatch={store.dispatch.bind(store)}
      />
    </BrowserRouter>
  )
}

bllSetRender(store.getState())
store.subscribe(bllSetRender)

reportWebVitals();
