import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {


  render() {
    return (
      <div className="Menu">
          <a href="#about">Propósito</a>
          <a href="#agevacines">Vacinas</a>
          <a href="#map">Onde encontrar</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastro</Link>      
      </div >
    );
  }
}

export default Menu;