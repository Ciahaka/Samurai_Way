import React from 'react';
import './App.css';
import {Header} from './Component/header/Header';
import {Footer} from './Component/footer block/footer/Footer';
import {NavBar} from './Component/navigation aside/navbar/NavBar';
import {Profile} from './Component/profile content/profile block/profile/Profile';
import {NewsBar} from './Component/news aside/NewsBar';
import {Dialogs} from './Component/navigation aside/dialogs block/dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
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
        <Routes>
          <Route path={'/Home'} element={<Profile/>}/>
          <Route path={'/Profile/*'} element={<Profile/>}/>
          <Route path={'/Dialogs/*'} element={<Dialogs/>}/>
          <Route path={'/Music'} element={<Music/>}/>
          <Route path={'/Photo'} element={<Photo/>}/>
          <Route path={'/News'} element={<NewsBar/>}/>
          <Route path={'/Project'} element={<Project/>}/>
          <Route path={'/About Us'} element={<AboutUs/>}/>
          <Route path={'/Contacts'} element={<Contacts/>}/>
        </Routes>
      </div>
      <NewsBar/>
      <Footer/>
    </div>
  );
}

