import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
            <div className={classes.item}>
              <div>Post {props.postId}</div>
              <img src="https://img4.eadaily.com/r600x600/o/b39/e4647d6fb5321598f4f3264f028e0.jpeg"></img>
              <div><span>{props.message}</span></div>
              <div><span>Likes {props.likeCount}</span></div>
            </div>
    )
}
export default Post;