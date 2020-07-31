import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />   
        <div className="app-wrapper-content">
          <Route render = { () => <Profile profilePage = {props.state.profilePage} dispatch = {props.dispatch} />}  path="/profile"/>
          <Route render = { () => <Dialogs store={props.store} />} path="/dialogs"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
