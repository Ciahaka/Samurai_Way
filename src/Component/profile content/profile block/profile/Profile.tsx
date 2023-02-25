import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from '../../posts block/my posts/MyPosts';
import {ProfileInfo} from '../profile info/ProfileInfo';
import {PostDataType} from '../../../../redux/state';
import {OpponentPost} from '../../opponent post/OpponentPost';




export type ProfilePropsType = {
  postsData: PostDataType[]

}
export const Profile = (props: ProfilePropsType) => {
  return (
    <div className={s.profile}>
      <h2 >Main Page</h2>
      <section >
        <ProfileInfo/>
        <MyPosts postsData={props.postsData}/>
        <OpponentPost id={1} message={'Как же мне это одолеть??'} likesCount={10}/>
      </section>
    </div>
  )
}

