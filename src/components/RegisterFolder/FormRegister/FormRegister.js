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
          // error: this.props.lala.Name,
        },
        BirthDate: {
          name: 'BirthDate',
          type: 'date',
          label: 'Data de Nascimento :',
          // error: this.props.lala.BirthDate,
        },
        Region: {
          name: 'Region',
          type: 'text',
          label: 'Região :',
          // error: this.props.lala.Region,
        },
        Cpf: {
          name: 'Cpf',
          type: 'text',
          label: 'Cpf :',
          maxLength: 8,
          // error: this.props.lala.Cpf,
        },
        Adress: {
          name: 'Adress',
          type: 'text',
          label: 'Endereço :',
          // error: this.props.lala.Adress,
        },
        Email: {
          name: 'Email',
          type: 'text',
          label: 'E-MAIL :',
          // error: this.props.lala.Email,
        },
        Password: {
          name: 'Password',
          type: 'password',
          label: 'Senha :',
          maxLength: 14,
          // error: this.props.lala.Password,
        },
        VaccineList: {
          name: 'VaccineList',
          type: 'text',
          label: 'Lista de Vacinas :',
          // error: this.props.lala.VaccineList,
        },
      }
    }
  }
  render() {
    return (
      <div className="FormRegister">}
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
              lala={this.props.lala.Name}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Email}
              lala={this.props.lala.Email}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Cpf}
              lala={this.props.lala.Cpf}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.BirthDate}
              lala={this.props.lala.BirthDate}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Password}
              lala={this.props.lala.Password}
            />
          </aside>
          <section>
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Region}
              lala={this.props.lala.Region}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.Adress}
              lala={this.props.lala.Adress}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.state.inputData.VaccineList}
              lala={this.props.lala.VaccineList}
            />
          </section>
          <button onClick={this.props.Submit}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default FormRegister;