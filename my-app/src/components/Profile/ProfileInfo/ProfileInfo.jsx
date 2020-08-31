import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <Preloader />
    }
    return (
        <div>
          <div><img src='https://thumbs.gfycat.com/DishonestDefenselessArchaeocete-size_restricted.gif' alt=""></img></div>
          <div className={classes.profile_block}>
            <img src={props.profile.photos.large} alt=""></img>
            Ava + Description
          </div>
        </div>
    )
}
export default ProfileInfo;