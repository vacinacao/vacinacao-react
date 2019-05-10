import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  smoothScrollAbout = () =>{
    window.scrollTo({
        top: 600, //Posição da tela o qual o scroll é atribuido 
        behavior: "smooth",
    });
}

smoothScrollMap = () =>{
  window.scrollTo({
      top: 1200, //Posição da tela o qual o scroll é atribuido 
      behavior: "smooth",
  });
}


  render() {
    return (
      <div className={this.props.setClass}>
          {/* <a href="#about">Propósito</a> */}
          <a onClick={this.smoothScrollAbout}>Propósito</a> 
          <a href="#agevacines">Vacinas</a>
          <a onClick={this.smoothScrollMap}>Onde encontrar</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastro</Link>      
      </div >
    );
  }
}

export default Menu;