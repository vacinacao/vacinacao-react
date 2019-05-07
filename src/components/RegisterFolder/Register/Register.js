import React from 'react';
import './Register.css';
import FormRegister from '../FormRegister/FormRegister';
import CheckRegister from '../CheckRegister/CheckRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CheckRegisterDisplay: false,
      FormRegisterValidate: {
        isValid: false,
        error: [],
        errorMsg:{
          message: [],
          hidden: true,
        }
      },
      userData: {
        Name: '',
        BirthDate: '',
        Region: '',
        Cpf: '',
        Adress: '',
        Email: '',
        Password: '',
        VaccineList: '',
      }
    }
  }

  handleNameChange = (event) => {
    let newState = this.state;
    newState.userData[event.target.name] = event.target.value;
    this.setState(newState);
    // console.log(this.state.userData);
  }

  handleSubmit = () => {
    this.handleValidate();
    let newState = this.state;
    newState.CheckRegisterDisplay = true;
    this.setState(newState);
  }

  handleValidate = () => {
    let fields = Object.values(this.state.userData);
    let newState = this.state;

    // Empty Validate
    fields.forEach(function (currentValue, element) {
      // console.log(newState.userData);
      if (currentValue.length > 0) {
      }
      else {
        newState.FormRegisterValidate.error.push(element);
      }
    });
    newState.FormRegisterValidate.errorMsg.message = [];
    this.setState(newState);
    this.checkValidate();
    // console.log('Está valido? ' + newState.FormRegisterValidate.isValid);
    // console.log('Elementos Invalidos: '+ newState.FormRegisterValidate.error);
  }
  checkValidate = () => {
    let newState = this.state;
    // console.log(this.state.FormRegisterValidate.error);
    if (newState.FormRegisterValidate.error.length === 0) {
      newState.FormRegisterValidate.isValid = true;
    }
    else {
      newState.FormRegisterValidate.isValid = false;
      this.singleValidation();
    }
    this.setState(newState);
  }

  singleValidation = () => {
    let newState = this.state;

    for (let inputArrayError of newState.FormRegisterValidate.error) {
      if (inputArrayError === 0) {
        newState.FormRegisterValidate.errorMsg.message.push('Nome ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 1) {
        newState.FormRegisterValidate.errorMsg.message.push('Data de Nascimento ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 2) {
        newState.FormRegisterValidate.errorMsg.message.push('Região ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 3) {
        newState.FormRegisterValidate.errorMsg.message.push('CPF ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 4) {
        newState.FormRegisterValidate.errorMsg.message.push('Endereço ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 5) {
        newState.FormRegisterValidate.errorMsg.message.push('Email ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 6) {
        newState.FormRegisterValidate.errorMsg.message.push('Senha ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
      if (inputArrayError === 7) {
        newState.FormRegisterValidate.errorMsg.message.push('Lista de Vascinas ');
        newState.FormRegisterValidate.errorMsg.hidden = false;
      }
    }
    newState.FormRegisterValidate.error = [];
    this.setState(newState);
  }

  render() {
    return (
      <div className="Register">
        {this.state.CheckRegisterDisplay
          ?
          <div>
            <CheckRegister
              FormRegisterValidate={this.state.FormRegisterValidate}
              errorMsg={this.state.FormRegisterValidate.errorMsg}
            />
            <FormRegister
              nameChange={this.handleNameChange}
              Submit={this.handleSubmit}
              userData={this.state.userData}
            />
          </div>
          :
          <FormRegister
            nameChange={this.handleNameChange}
            Submit={this.handleSubmit}
            userData={this.state.userData}
          />
        }
      </div>
    );
  }
}

export default Register;