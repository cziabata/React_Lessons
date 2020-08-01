import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => { 
         let action = updateNewPostText(text);
         dispatch(action);
       },
      addPost: () => { dispatch(addPostActionCreator()) }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;