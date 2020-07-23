import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
     <div>
        My Posts
        <div>New Post</div>
        <div className={classes.posts}>
           <Post message="Hi, i am president" postId="1" likeCount="50"/> 
           <Post message="It's my first post" postId="2" likeCount="23"/> 
        </div>
     </div>
  )
}
export default MyPosts;