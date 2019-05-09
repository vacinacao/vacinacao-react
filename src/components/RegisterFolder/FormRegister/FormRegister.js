import React from 'react';
import './FormRegister.css';
import Input from './Input/Input';
import CheckRegister from '../CheckRegister/CheckRegister';

class FormRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: {
        Name: {
          name: 'Name',
          type: 'text',
          label: 'Nome :',
          maxLength: 15,
        },
        BirthDate: {
          name: 'BirthDate',
          type: 'date',
          label: 'Data de Nascimento :',
        },
        Region: {
          name: 'Region',
          type: 'text',
          label: 'Região :',
        },
        Cpf: {
          name: 'Cpf',
          type: 'text',
          label: 'Cpf :',
          maxLength: 8,
        },
        Adress: {
          name: 'Adress',
          type: 'text',
          label: 'Endereço :',
        },
        Email: {
          name: 'Email',
          type: 'text',
          label: 'E-MAIL :',
        },
        Password: {
          name: 'Password',
          type: 'password',
          label: 'Senha :',
          maxLength: 14,
        },
        VaccineList: {
          name: 'VaccineList',
          type: 'text',
          label: 'Lista de Vacinas :',
        }

      }
    }
  }
  render() {
    return (
      <div className="FormRegister">
        <CheckRegister
          FormRegisterValidate={this.props.FormRegisterValidate}
          errorMsg={this.props.errorMsg}
        />
        <h2>Registro:</h2>
        <div className="fieldsInputs">
          <aside>
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Name}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Email}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Cpf}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.BirthDate}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Password}
            />
          </aside>
          <section>
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Region}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Adress}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.VaccineList}
            />
          </section>
          <button onClick={this.props.Submit}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default FormRegister;