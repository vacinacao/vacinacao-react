import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
//   constructor(props)
//   super(props)
//   this.state = {
//   LuisGustavo: {
//     cpf: 42147276812,
//     birthDate: 28061993
//   }
// }



render() {
  return (
    <div className='Login'>
      <h2>Login</h2>
      <div className='Inputs'>
        <div className='Cpf'>
          <label htmlFor='Cpf'>CPF:</label>
          <input type='number' name='Cpf' maxLength='11' />
        </div>
        <div className='BirthDate'>
          <label htmlFor='BirthDate'>Data de Nascimento:</label>
          <input type='date' name='BirthDate' />
        </div>
      <Link to="/cardview"><button>Logar</button></Link>
      </div>
    </div>
  );
}
  }

export default Login;