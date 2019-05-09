import React from 'react';
import './Register.css';
import FormRegister from '../FormRegister/FormRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CheckRegisterDisplay: false,
      FormRegisterValidate: {
        isValid: false,
        error: [],
        errorMsg: {
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
      },
      inputError: {
        Name: false,
        BirthDate: false,
        Region: false,
        Cpf: false,
        Adress: false,
        Email: false,
        Password: false,
        VaccineList:false,
      }
    }
  }

  handleNameChange = (event) => {
    let newState = this.state;
    newState.userData[event.target.name] = event.target.value;
    this.setState(newState);
    // console.log(this.state.us  erData);
  }

  handleSubmit = () => {
    this.handleValidate();
    let newState = this.state;
    newState.CheckRegisterDisplay = true;
    this.setState(newState);
    // console.log(this.state.userData);
    // console.log(this.state.FormRegisterValidate.isValid);
  }

  handleValidate = () => {
    let fields = Object.values(this.state.userData);
    let newState = this.state;

    // RegularExpressions Vars
    let regularExp = {
      name: new RegExp(/^[a-zA-Z ]+$/),
      Cpf: new RegExp(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/),
      Email: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    }

    fields.forEach(function (currentValue, element) {
      // console.log(newState.userData);

      // Empty Validate
      if (currentValue.length > 0) {
        // Regular Expression Logic
        // Nome
        if (element === 0) {
          if (!regularExp.name.test(currentValue)) {
            newState.FormRegisterValidate.error.push(element);
          }
        }
        // Cpf
        if (element === 3) {
          if (!regularExp.Cpf.test(currentValue)) {
            newState.FormRegisterValidate.error.push(element);
          }
        }
        // Email
        if (element === 5) {
          if (!regularExp.Email.test(currentValue)) {
            newState.FormRegisterValidate.error.push(element);
          }
        }
      }
      else {
        newState.FormRegisterValidate.error.push(element);
      }
    });
    newState.FormRegisterValidate.errorMsg.message = [];
    this.setState(newState);
    this.checkValidate();
  }
  checkValidate = () => {
    let newState = this.state;

    if (newState.FormRegisterValidate.error.length === 0) {
      newState.FormRegisterValidate.isValid = true;
    }
    else {
      newState.FormRegisterValidate.isValid = false;
    }
    this.setState(newState);
    this.handleDisplayErrorMsg();
  }

  handleDisplayErrorMsg = () => {
    let newState = this.state;

    for (let inputArrayError of newState.FormRegisterValidate.error) {
      let errorMsg = newState.FormRegisterValidate.errorMsg.message;
      let hiddenMsg = newState.FormRegisterValidate.errorMsg;

      if (inputArrayError === 0) {
        errorMsg.push('Nome ');
        hiddenMsg.hidden = false;
        newState.inputError.Name = true; 
      }
      if (inputArrayError === 1) {
        errorMsg.push('Data de Nascimento ');
        hiddenMsg.hidden = false;
        newState.inputError.BirthDate = true; 
      }
      if (inputArrayError === 2) {
        errorMsg.push('Região ');
        hiddenMsg.hidden = false;
        newState.inputError.Region = true; 
      }
      if (inputArrayError === 3) {
        errorMsg.push('CPF ');
        hiddenMsg.hidden = false;
        newState.inputError.Cpf = true; 
      }
      if (inputArrayError === 4) {
        errorMsg.push('Endereço ');
        hiddenMsg.hidden = false;
        newState.inputError.Adress = true; 
      }
      if (inputArrayError === 5) {
        errorMsg.push('Email ');
        hiddenMsg.hidden = false;
        newState.inputError.Email = true; 
      }
      if (inputArrayError === 6) {
        errorMsg.push('Senha ');
        hiddenMsg.hidden = false;
        newState.inputError.Password = true; 
      }
      if (inputArrayError === 7) {
        errorMsg.push('Lista de Vascinas ');
        hiddenMsg.hidden = false;
        newState.inputError.VaccineList = true; 
      }
      this.setState(newState);
    }
    newState.FormRegisterValidate.error = [];
  }

  render() {
    return (
      <div className="Register">
        <FormRegister
          nameChange={this.handleNameChange}
          Submit={this.handleSubmit}
          userData={this.state.userData}
          FormRegisterValidate={this.state.FormRegisterValidate}
          errorMsg={this.state.FormRegisterValidate.errorMsg}
          lala={this.state.inputError}
        />
      </div>
    );
  }
}

export default Register;