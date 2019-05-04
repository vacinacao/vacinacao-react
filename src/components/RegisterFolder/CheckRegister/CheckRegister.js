import React from 'react';
import './CheckRegister.css';
import CheckSymbol from '../../../assets/CheckSymbol.png';

class CheckRegister extends React.Component {
  render() {
    return (
      <div className="CheckRegister">
        <img src={CheckSymbol} alt="CheckSymbol"/>
        <p>Cadastro Feito!</p>
      </div>
    );
  }
}

export default CheckRegister;