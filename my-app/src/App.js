import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />   
        <div className="app-wrapper-content">
          <Route render = { () => <Profile />}  path="/profile"/>
          <Route render = { () => <DialogsContainer />} path="/dialogs"/>
          <Route render = { () => <UsersContainer /> }  path="/users"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
