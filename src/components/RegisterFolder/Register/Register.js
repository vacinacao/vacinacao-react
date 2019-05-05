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
        newState.FormRegisterValidate.isValid = true;
      }
      else {
        newState.FormRegisterValidate.isValid = false;
        newState.FormRegisterValidate.error.push(element);
      }
      // Erro: o form está aceitando quando só o ultimo input tem valor pela ordem da estrutura do if

    });

    this.setState(newState);
    this.SingleValidate();
    // console.log('Está valido? ' + newState.FormRegisterValidate.isValid);
    // console.log('Elementos Invalidos: '+ newState.FormRegisterValidate.error);
  }
  SingleValidate = () => {
    for (let singleError of this.state.FormRegisterValidate.error) {
      if (singleError === 0) {
        console.log('0')
      }
      else if (singleError === 1) {
        console.log('1')
      }
      else if (singleError === 2) {
        console.log('2')
      }
      else if (singleError === 3) {
        console.log('3')
      }
      else if (singleError === 4) {
        console.log('4')
      }
      else if (singleError === 5) {
        console.log('5')
      }
      else if (singleError === 6) {
        console.log('6')
      }
      else if (singleError === 7) {
        console.log('7')
      }
      else {
        console.log('wtf');
      }
    }
  }

  render() {
    return (
      <div className="Register">
        {this.state.CheckRegisterDisplay
          ?
          <div>
            <CheckRegister
              FormRegisterValidate={this.state.FormRegisterValidate}
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