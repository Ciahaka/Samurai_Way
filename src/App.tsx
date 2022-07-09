import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Header} from "./Component/Header/Header";
import {Nav} from "./Component/Nav/Nav";
import {Profile} from "./Component/Profile/Profile";
import {Dialogs} from "./Component/Dialogs/Dialogs";
import {News} from "./Component/News/News";
import {Music} from "./Component/Music/Music";
import {Settings} from "./Component/Setting/Setting";


export const App = () => {
  return (
    <BrowserRouter>
      <div className='siteWrapper'>
        <Header/>
        <Nav/>
        <div className='siteWrapperContent'>
          <Route path={'/dialogs'} render={Dialogs}/>
          <Route path={'/profile'} render={Profile}/>
          <Route path={'/news'} render={News}/>
          <Route path={'/music'} render={Music}/>
          <Route path={'/settings'} render={Settings}/>

        </div>
      </div>
    </BrowserRouter>
  );
}

