import React from 'react';
import './CheckRegister.css';
import CheckSymbol from '../../../assets/CheckSymbol.png';

class CheckRegister extends React.Component {
  render() {
    return (
      <div className="CheckRegister">
        {this.props.isValid
          ?
          <div className="CheckRegisterRight">
            <img src={CheckSymbol} alt="CheckSymbol" />
            <p>Cadastro Feito!</p>
          </div>
          :
          <div className="CheckRegisterWrong">
            <p>error</p>
          </div>
        }
      </div>
    );
  }
}

export default CheckRegister;