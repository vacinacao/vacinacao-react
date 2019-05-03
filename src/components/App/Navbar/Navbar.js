import React from 'react';
import LogoMS from '../../../assets/Ministerio_da_Saude-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  handleClick = event => {
    event.target.classList.toggle('active');
  }

  render() {
    return (
      <div className="Navbar">
        <div className="LogoMS">
          <img src={LogoMS} alt='Logo'/>
        </div>
        <div className="Menu" onClick={this.handleClick}>
          <Link to="#about"><p>Propósito</p></Link>
          <Link to="#agevacines"><p>Vacinas</p></Link>
          <Link to="#map"><p>Onde encontrar</p></Link>
          <Link to="/login"><p>Login</p></Link>
          <Link to="/register"><p>Cadastro</p></Link>
        </div>
        <div className="MenuMobile" onClick={this.handleClick}>
          <span className="Dash"></span>
          <span className="Dash"></span>
          <span className="Dash"></span>
        </div>
      </div>
    );
  }
}

export default Navbar;