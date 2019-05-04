import React from 'react';
import './Register.css';
import FormRegister from '../FormRegister/FormRegister';
import CheckRegister from '../CheckRegister/CheckRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CheckRegisterDisplay: false,
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

  handleNameChange = (event) =>{
    let newState = this.state;
    newState.userData[event.target.name] = event.target.value;
    this.setState(newState);
    console.log(this.state.userData);
  }

  handleSubmit = () => {
      let newState = this.state;
      newState.CheckRegisterDisplay = true;
      this.setState(newState);
  }

  render() {
    return (
      <div className="Register">
        {this.state.CheckRegisterDisplay
          ?
            <CheckRegister
            
             />
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