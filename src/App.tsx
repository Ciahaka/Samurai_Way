import React from 'react';
import './App.css';
import {Header} from './Component/header block/Header';
import {Footer} from './Component/footer block/footer/Footer';
import {NavBar} from './Component/navigation aside/navbar/NavBar';
import {Profile} from './Component/profile content/profile block/profile/Profile';
import {NewsBar} from './Component/news/news bar/NewsBar';
import {Dialogs} from './Component/dialogs block/dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {Music} from './Component/navigation aside/music/Music';
import {Photo} from './Component/navigation aside/photo/Photo';
import {Contacts} from './Component/footer block/our contacts/Contacts';
import {Project} from './Component/footer block/project/Project';
import {AboutUs} from './Component/footer block/about us/AboutUs';
import {rootState} from './redux/state'
import {Friends} from './Component/navigation aside/friends/Friends';
import {NewsBlock} from './Component/news/news block/NewsBlock';


export const App = () => {


  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/Home/*'} element={<Profile postsData={rootState.posts.postsData}/>}/>
          <Route path={'/Profile/*'} element={<Profile postsData={rootState.posts.postsData}/>}/>
          <Route path={'/Dialogs/*'} element={<Dialogs dialogsData={rootState.dialogs.dialogsData}
                                                       messageData={rootState.dialogs.messageData}/>}/>
          <Route path={'/Music'} element={<Music/>}/>
          <Route path={'/Photo'} element={<Photo/>}/>
          <Route path={'/Friends'} element={<Friends/>}/>
          <Route path={'/News'} element={<NewsBlock/>}/>
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

