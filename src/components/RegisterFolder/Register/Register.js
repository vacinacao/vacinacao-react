import React from 'react';
import './Register.css';
import FormRegister from '../FormRegister/FormRegister';
import CheckRegister from '../CheckRegister/CheckRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CheckRegisterDisplay: false,
    }
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
              Submit={this.handleSubmit}
            />
        }
      </div>
    );
  }
}

export default Register;