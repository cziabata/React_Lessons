import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://dynamic.brandcrowd.com/asset/logo/d8cb7121-b606-4b39-bf45-7c9cf6d9829e/logo?v=4" alt=""></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
       
    )
}
export default Header;