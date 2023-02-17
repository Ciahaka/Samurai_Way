import React from 'react';
import './App.css';
import {Header} from './Component/Header';
import {Footer} from './Component/Footer';
import {NavBar} from './Component/NavBar';
import {Content} from './Component/Content';
import {NewsBar} from './Component/NewsBar';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Content/>
      <NewsBar/>
      <Footer/>
    </div>
  );
}

