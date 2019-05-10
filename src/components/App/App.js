import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeApp from '../HomeFolder/HomeApp/HomeApp';
import Login from '../UserFolder/Login/Login';
import Register from '../RegisterFolder/Register/Register';
import Navbar from '../App/Navbar/Navbar';
import './App.css';
import CardView from '../UserFolder/CardView/CardView';
import Footer from './Footer/Footer';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
          <Route path="/" exact component={HomeApp}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/cardView" exact component={CardView}/>
          <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;