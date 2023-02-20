import React from 'react';
import './App.css';
import {Header} from './Component/header/Header';
import {Footer} from './Component/footer/Footer';
import {NavBar} from './Component/navigation aside/NavBar';
import {Profile} from './Component/profile content/profile/Profile';
import {NewsBar} from './Component/news aside/NewsBar';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
      <NewsBar/>
      <Footer/>
    </div>
  );
}

