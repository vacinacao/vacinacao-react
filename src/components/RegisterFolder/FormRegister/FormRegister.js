import React from 'react';
import './FormRegister.css';

class FormRegister extends React.Component {
  render() {
    return (
      <div className="FormRegister">
        <h2>Registro:</h2>
        <div className="Inputs">
          <div className="Name">
            <label htmlFor="Name">Nome:</label>
            <input type="text" />
          </div>
          <div className="BirthDate">
            <label htmlFor="BirthDate">Data de Nascimento:</label>
            <input type="date" />
          </div>
          <div className="Region">
            <label htmlFor="Region">Região:</label>
            <input type="text" />
          </div>
          <div className="Cpf">
            <label htmlFor="Cpf">CPF:</label>
            <input type="number" />
          </div>
          <div className="Adress">
            <label htmlFor="Adress">Endereço:</label>
            <input type="text" />
          </div>
          <div className="Email">
            <label htmlFor="Email">E-MAIL:</label>
            <input type="email" />
          </div>
          <div className="Password">
            <label htmlFor="Password">Senha:</label>
            <input type="password" />
          </div>
          <div className="VaccineList">
            <label htmlFor="VaccineList">Lista de Vacinas:</label>
            <input type="text" />
          </div>
        </div>
        <button>Enviar</button>
      </div>
    );
  }
}

export default FormRegister;