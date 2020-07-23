import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />   
        <div className="app-wrapper-content">
          <Route component={Profile} path="/profile"/>
          <Route component={Dialogs} path="/dialogs"/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
