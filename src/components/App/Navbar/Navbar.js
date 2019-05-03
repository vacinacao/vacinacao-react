import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
      <Link to="/login"><p>Login</p></Link>
      <Link to="/register"><p>Cadastro</p></Link>
      </div>
    );
  }
}

export default Navbar;