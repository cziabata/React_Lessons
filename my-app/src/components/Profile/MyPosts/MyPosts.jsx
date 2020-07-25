import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

   let postsElements = props.postData.map( post => <Post message={post.message} postId={post.id} likeCount={post.likesCount}/>);

    return (
     <div className={classes.MyPosts_block}>
        <h3>My Posts</h3>
        <div>
           <div>
              <textarea></textarea>
           </div>
           <div>
              <button>Add Post</button>
           </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
     </div>
  )
}
export default MyPosts;