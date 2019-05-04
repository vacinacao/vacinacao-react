import React from 'react';
import './Register.css';
import FormRegister from '../FormRegister/FormRegister';
import CheckRegister from '../CheckRegister/CheckRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CheckRegisterDisplay: false,
      FormRegisterIsValidate: false,
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

    fields.forEach(function (currentValue, index) {
      if (currentValue > 0) {
        console.log(index + ' true');
        newState.FormRegisterIsValidate = true;
      }
      else {
        console.log(index + ' false');
        newState.FormRegisterIsValidate = false;
      }
    });

    this.setState(newState);
  }

  render() {
    return (
      <div className="Register">
        {this.state.CheckRegisterDisplay
          ?
          <div>
          <CheckRegister
            isValid={this.state.FormRegisterIsValidate}
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