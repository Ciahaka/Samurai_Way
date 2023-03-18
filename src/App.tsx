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
import {ActionType, RootStateType, StoreType} from './redux/state'
import {Friends} from './Component/navigation aside/friends/Friends';
import {NewsBlock} from './Component/news/news block/NewsBlock';

export type StatePropsType = {
  state: RootStateType
  textForUpdate: string
  messageValue:string
  store:StoreType
  dispatch:(action:ActionType)=>void
}

export const App = (props: StatePropsType) => {
const state = props.store.getState()

  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path={'/Home/*'} element={<Profile postsData={state.posts.postsData}
                                                    textForUpdate={props.textForUpdate}
                                                    dispatch={props.dispatch}

          />}/>

          <Route path={'/Profile/*'} element={<Profile postsData={state.posts.postsData}
                                                       textForUpdate={props.textForUpdate}
                                                       dispatch={props.dispatch}

          />}/>

          <Route path={'/Dialogs/*'} element={<Dialogs dialogsData={state.dialogs.dialogsData}
                                                       messageData={state.dialogs.messageData}
                                                       messageValue={props.messageValue}
                                                       dispatch={props.dispatch}

          />}/>
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

