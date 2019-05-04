import React from 'react';
import './FormRegister.css';

class FormRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
}

  render() {
    return (
      <div className="FormRegister">
        <h2>Registro:</h2>
        <div className="Inputs">
          <div className="Name">
            <label htmlFor="Name">Nome:</label>
            <input type="text" onChange={this.props.nameChange} value={this.props.userData.Name} name='Name' maxLength='15'/>
          </div>
          <div className="BirthDate">
            <label htmlFor="BirthDate">Data de Nascimento:</label>
            <input type="date" onChange={this.props.nameChange} value={this.props.userData.BirthDate} name='BirthDate' />
          </div>
          <div className="Region">
            <label htmlFor="Region">Região:</label>
            <input type="text" onChange={this.props.nameChange} value={this.props.userData.Region} name='Region'  />
          </div>
          <div className="Cpf">
            <label htmlFor="Cpf">CPF:</label>
            <input type="number" onChange={this.props.nameChange} value={this.props.userData.Cpf} name='Cpf' />
          </div>
          <div className="Adress">
            <label htmlFor="Adress">Endereço:</label>
            <input type="text" onChange={this.props.nameChange} value={this.props.userData.Adress} name='Adress'  />
          </div>
          <div className="Email">
            <label htmlFor="Email">E-MAIL:</label>
            <input type="email" onChange={this.props.nameChange} value={this.props.userData.Email} name='Email' />
          </div>
          <div className="Password">
            <label htmlFor="Password">Senha:</label>
            <input type="password" onChange={this.props.nameChange} value={this.props.userData.Password} name='Password' />
          </div>
          <div className="VaccineList">
            <label htmlFor="VaccineList">Lista de Vacinas:</label>
            <input type="text" onChange={this.props.nameChange} value={this.props.userData.VaccineList} name='VaccineList'  />
          </div>
        </div>
        <button onClick={this.props.Submit}>Enviar</button>
      </div>
    );
  }
}

export default FormRegister;