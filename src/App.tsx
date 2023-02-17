import React from 'react';
import './App.css';
import {Header} from './Component/Header';
import {Tech} from './Component/Tech';
import {Footer} from './Component/Footer';

export const App = () => {
  return (
    <div>
      <Header/>
      <Tech/>
      <Footer/>
    </div>
  );
}

