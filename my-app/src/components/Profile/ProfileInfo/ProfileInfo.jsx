import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
          <div><img src='https://thumbs.gfycat.com/DishonestDefenselessArchaeocete-size_restricted.gif'></img></div>
          <div className={classes.profile_block}>Ava + Description</div>
        </div>
    )
}
export default ProfileInfo;