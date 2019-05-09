import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  smoothScroll = () =>{
    window.scrollTo({
        top: 1000, //Posição da tela o qual o scroll é atribuido 
        behavior: "smooth",
    });
}


  render() {
    return (
      <div className={this.props.setClass}>
          {/* <a href="#about">Propósito</a> */}
          <a onClick={this.smoothScroll}>Propósito</a> 
          <a href="#agevacines">Vacinas</a>
          <a href="#map">Onde encontrar</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastro</Link>      
      </div >
    );
  }
}

export default Menu;