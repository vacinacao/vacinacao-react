import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeApp from '../HomeFolder/HomeApp/HomeApp';
import Login from '../UserFolder/Login/Login';
import Register from '../RegisterFolder/Register/Register';
import Navbar from '../App/Navbar/Navbar';
import './App.css';
import CardView from '../UserFolder/CardView/CardView';
import Footer from './Footer/Footer';
import * as firebase from "firebase/app";

class App extends React.Component {
  constructor(props){
    super(props);
    const firebaseConfig = {
      apiKey: "AIzaSyBjdg4KacpxD05Mpw-KnaFRc8W-ulRKYPw",
      authDomain: "vacinacao.firebaseapp.com",
      databaseURL: "https://vacinacao.firebaseio.com",
      projectId: "vacinacao",
      storageBucket: "vacinacao.appspot.com",
      messagingSenderId: "112632968961",
      appId: "1:112632968961:web:48872cdf96224596"
    }
    firebase.initializeApp(firebaseConfig);
  }
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