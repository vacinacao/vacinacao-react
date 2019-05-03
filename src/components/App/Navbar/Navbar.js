import React from 'react';
import mainLogo from '../../../assets/Ministerio_da_Saude-logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Logo">
          <img src={mainLogo}/>
        </div>
        <div className="Menu">
          <Link to="#about"><p>Propósito</p></Link>
          <Link to="#agevacines"><p>Vacinas</p></Link>
          <Link to="#map"><p>Onde encontrar</p></Link>
          <Link to="/login"><p>Login</p></Link>
          <Link to="/register"><p>Cadastro</p></Link>
        </div>
      </div>
    );
  }
}

export default Navbar;