import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {Nav} from "./Component/Nav/Nav";
import {Profile} from "./Component/Profile/Profile";

export const App = () => {
  return (
    <div className='site-wrapper'>
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
}

