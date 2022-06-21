import React from 'react';
import classes  from "./Post/Post.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
      <div>My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
       <Post/>
       <Post/>
       <Post/>
      </div>
  )

}