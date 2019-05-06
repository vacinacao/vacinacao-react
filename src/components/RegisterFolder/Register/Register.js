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
      }
      else {
        newState.FormRegisterValidate.error.push(element);
      }
    });
    this.setState(newState);
    this.singleValidate();
    // this.singleValidate();
    // console.log('Está valido? ' + newState.FormRegisterValidate.isValid);
    // console.log('Elementos Invalidos: '+ newState.FormRegisterValidate.error);
  }
  singleValidate = () => {
    let newState = this.state;
    console.log(this.state.FormRegisterValidate.error);
    if (newState.FormRegisterValidate.error.length === 0) {
      newState.FormRegisterValidate.isValid = true;
    }
    else {
      newState.FormRegisterValidate.isValid = false;
      newState.FormRegisterValidate.error = [];
    }
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