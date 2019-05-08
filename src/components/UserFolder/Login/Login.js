import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

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
          <Link to="/cardview"><button>Logar</button></Link>
      </div>
    );
  }
}

export default Login;