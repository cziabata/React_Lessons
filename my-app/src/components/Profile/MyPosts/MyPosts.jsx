import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostText} from "./../../../redux/profile-reducer";

const MyPosts = (props) => {

   let postsElements = props.postData.map( post => <Post message={post.message} postId={post.id} likeCount={post.likesCount}/>);

   let newPostElement = React.createRef();

   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = updateNewPostText(text);
      props.dispatch(action);
   }

    return (
     <div className={classes.MyPosts_block}>
        <h3>My Posts</h3>
        <div>
           <div>
              <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText}/>
           </div>
           <div>
              <button onClick = {addPost}>Add Post</button>
           </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
     </div>
  )
}
export default MyPosts;