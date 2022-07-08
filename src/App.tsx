import React from 'react';
import './App.css';
import {Header} from "./Component/Header/Header";
import {Nav} from "./Component/Nav/Nav";
import {Profile} from "./Component/Profile/Profile";
import {Dialogs} from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
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
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>

        </div>
      </div>
    </BrowserRouter>
  );
}

