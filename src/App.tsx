import React from 'react';
import './App.css';
import {Header} from './Component/header/Header';
import {Footer} from './Component/footer block/footer/Footer';
import {NavBar} from './Component/navigation aside/navbar/NavBar';
import {Profile} from './Component/profile content/profile/Profile';
import {NewsBar} from './Component/news aside/NewsBar';
import {Dialogs} from './Component/navigation aside/dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Music} from './Component/navigation aside/music/Music';
import {Photo} from './Component/navigation aside/photo/Photo';
import {Contacts} from './Component/footer block/our contacts/Contacts';
import {Project} from './Component/footer block/project/Project';
import {AboutUs} from './Component/footer block/about us/AboutUs';

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <div className="app-wrapper-content">
        <Route path={'/Profile/'} component={Profile}/>
        <Route path={'/Dialogs/'} component={Dialogs}/>
        <Route path={'/Music/'} component={Music}/>
        <Route path={'/Photo/'} component={Photo}/>
        <Route path={'/News/'} component={NewsBar}/>
        <Route path={'/Project/'} component={Project}/>
        <Route path={'/About Us/'} component={AboutUs}/>
        <Route path={'/Contacts/'} component={Contacts}/>
      </div>
      <NewsBar/>
      <Footer/>
    </div>
  );
}

