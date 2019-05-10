import React from 'react';
import './CheckRegister.css';
import CheckSymbol from '../../../assets/CheckSymbol.png';

class CheckRegister extends React.Component {
  render() {
    return (
      <div className="CheckRegister">
        <div className={this.props.display ? '' : 'hidden'}>
          {this.props.formRegisterValidate.isValid
            ?
            <div className="CheckRegisterRight">
              <img src={CheckSymbol} alt="CheckSymbol" />
              <p>Cadastro Feito!</p>
            </div>
            :
            <p>fudeu</p>
          }
        </div>
      </div>
    );
  }
}

export default CheckRegister;