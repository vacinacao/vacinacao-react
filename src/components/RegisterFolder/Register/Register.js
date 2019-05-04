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
          <div>
            <FormRegister

            />
            <p>Verdadeiro</p>
          </div>
          :
          <div>
            <FormRegister
              Submit={this.handleSubmit}
            />
            <p>Falso</p>
          </div>
        }
      </div>
    );
  }
}

export default Register;