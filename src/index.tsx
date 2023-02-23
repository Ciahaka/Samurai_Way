import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const dialogsData = [
  {id: '1', name: 'Oleg'},
  {id: '2', name: 'Turbo'},
  {id: '3', name: 'Morgan'},
  {id: '4', name: 'Vadim'},
  {id: '5', name: 'Алексей'},
  {id: '6', name: 'ХАН'},
]
export const messageData = [
  {id: '1', message: 'Привет! Рады видеть тебя здесь!'},
  {id: '2', message: 'Спасибо за приглашение!'},
  {id: '3', message: 'Hi bro'},
]

const postsData = [
  {id: 1, message: 'Привет! Что нового?!', likesCount: 15},
  {id: 2, message: 'Всё отлично! Как сам?', likesCount: 3},
  {id: 3, message: 'В порядке! Спасибо зарядке!', likesCount: 8},
]
root.render(
  <BrowserRouter>
    <App dialogsData={dialogsData}
         messageData={messageData}
         postsData={postsData}
    />
  </BrowserRouter>
)
reportWebVitals();