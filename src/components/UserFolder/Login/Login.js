import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className='Login'>
        <h2>Login</h2>
          <div className='Inputs'>
            <div className='Cpf'>
              <label htmlFor='Cpf'>CPF: </label>
              <input type='number' name='Cpf' />
            </div>
            <div className='BirthDate'>
              <label htmlFor='BirthDate'>Data de Nascimento: </label>
              <input type='date' name='BirthDate' />
          </div>
          </div>
          <button>Logar</button>
      </div>
    );
  }
}

export default Login;