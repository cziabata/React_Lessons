import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navbar/Nav';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />   
        <div className="app-wrapper-content">
          <Route render = { () => <ProfileContainer />}  path="/profile/:userId?"/>
          <Route render = { () => <DialogsContainer />} path="/dialogs"/>
          <Route render = { () => <UsersContainer /> }  path="/users"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
