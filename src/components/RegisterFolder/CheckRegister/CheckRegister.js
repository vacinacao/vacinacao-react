import React from 'react';
import './CheckRegister.css';
import CheckSymbol from '../../../assets/CheckSymbol.png';

class CheckRegister extends React.Component {
  render() {
    return (
      <div className={`
      CheckRegister 
      ${this.props.errorMsg.hidden ? 'hidden' : ''}
      `}>
        {this.props.FormRegisterValidate.isValid
          ?
          <div className="CheckRegisterRight">
            <img src={CheckSymbol} alt="CheckSymbol" />
            <p>Cadastro Feito!</p>
          </div>
          :
          <div className="CheckRegisterWrong">
            <p
              className={this.props.errorMsg.hidden ? 'hidden' : ''}
            >
              Invalid: {this.props.errorMsg.message}</p>
          </div>
        }
      </div>
    );
  }
}

export default CheckRegister;