import React from 'react';
import './Register.css';
import CheckRegister from '../CheckRegister/CheckRegister'
import FormRegister from '../FormRegister/FormRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkRegisterDisplay: false,
      formRegisterValidate: {
        isValid: false,
      },
      userData: {
        name: {
          inputData: {
            inputValue: '',
            name: 'name',
            type: 'text',
            label: 'Nome :',
            maxLength: 15,
          },
          isValid: false,
          regularExp: new RegExp(/^[a-zA-Z ]+$/),
          errorMsg: ' Name',
        },
        birthDate: {
          inputData: {
            inputValue: '',
            name: 'birthDate',
            type: 'date',
            label: 'Data de Nascimento :',
          },
          isValid: false,
          errorMsg: ' Birth Date',
        },
        region: {
          inputData: {
            inputValue: '',
            name: 'region',
            type: 'text',
            label: 'Região :',
          },
          isValid: false,
          errorMsg: ' region',
        },
        cpf: {
          inputData: {
            inputValue: '',
            name: 'cpf',
            type: 'text',
            label: 'CPF :',
          },
          isValid: false,
          regularExp: new RegExp(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/),
          errorMsg: ' cpf',
        },
        adress: {
          inputData: {
            inputValue: '',
            name: 'adress',
            type: 'text',
            label: 'Endereço :',
          },
          isValid: false,
          errorMsg: ' adress',
        },
        email: {
          inputData: {
            inputValue: '',
            name: 'email',
            type: 'text',
            label: 'Email :',
          },
          isValid: false,
          regularExp: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), //Dando erro no console
          errorMsg: ' email',
        },
        password: {
          inputData: {
            inputValue: '',
            name: 'password',
            type: 'password',
            label: 'Senha :',
            maxLength: 15,
          },
          isValid: false,
          errorMsg: ' password',
        },
        vaccineList: {
          inputData: {
            inputValue: '',
            name: 'vaccineList',
            type: 'text',
            label: 'Lista de Vacinas',
            maxLength: 15,
          },
          isValid: false,
          errorMsg: ' vaccineList',
        },
      },
    }
  }

  handleNameChange = (event) => {
    let newState = this.state;
    newState.userData[event.target.name].inputData.inputValue = event.target.value;
    this.setState(newState);
  }

  handleSubmit = () => {
    let newState = this.state;
    newState.checkRegisterDisplay = true;
    this.handleValidate();
    this.setState(newState);
  }

  handleValidate = () => {
    let newState = this.state;
    let arrayUserData = Object.entries(newState.userData);

    arrayUserData.forEach(function (currentValue) {
      let userDataContent = currentValue[1];
      let userDataName = currentValue[0];

      // Empty Validation
      if (userDataContent.inputData.inputValue.length > 0) {
        userDataContent.isValid = true;
      }
      else {
        userDataContent.isValid = false;
      }

      // Regular Expressions
      if (userDataName === 'name') {
        let regExpTest = userDataContent.regularExp.test(userDataContent.inputData.inputValue);
        if (regExpTest) {
          userDataContent.isValid = true;
        }
        else {
          userDataContent.isValid = false;
        }
      }

      if (userDataName === 'email') {
        let regExpTest = userDataContent.regularExp.test(userDataContent.inputData.inputValue);
        if (regExpTest) {
          userDataContent.isValid = true;
        }
        else {
          userDataContent.isValid = false;
        }
      }

      if (userDataName === 'cpf') {
        let regExpTest = userDataContent.regularExp.test(userDataContent.inputData.inputValue);
        if (regExpTest) {
          userDataContent.isValid = true;
        }
        else {
          userDataContent.isValid = false;
        }
      }
      // Set newState userData Content 
      newState.userData[userDataName] = userDataContent;
    });

    // Set formRegisterValidate.isValid
    var i = 0;
    for (let singleUseData of arrayUserData) {
      if (singleUseData[1].isValid) {
        i++;
      }
      else {
        i--;
      }
    }
    if (i === arrayUserData.length) {
      newState.formRegisterValidate.isValid = true;
    }
    else {
      newState.formRegisterValidate.isValid = false;
    }
    //  Precisa validar todos os isvalid
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    return (
      <div className="Register">
        <CheckRegister
          formRegisterValidate={this.state.formRegisterValidate}
          display={this.state.checkRegisterDisplay}
        />
        <FormRegister
          nameChange={this.handleNameChange}
          submit={this.handleSubmit}
          userData={this.state.userData}
          checkRegisterDisplay={this.state.checkRegisterDisplay}
        />
      </div>
    );
  }
}

export default Register;