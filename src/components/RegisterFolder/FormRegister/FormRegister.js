import React from 'react';
import './FormRegister.css';
import Input from './Input/Input';
import ErrorMessage from './ErrorMessage/ErrorMessage';

class FormRegister extends React.Component {
  render() {
    return (
      <div className="FormRegister">
        <h2>Registro:</h2>
        <div className="fieldsInputs">
          <aside>
            <ErrorMessage
              userData={this.props.userData.name}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.name}
            />
            <ErrorMessage
              userData={this.props.userData.email}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.email}
            />
            <ErrorMessage
              userData={this.props.userData.cpf}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.cpf}
            />
            <ErrorMessage
              userData={this.props.userData.birthDate}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.birthDate}
            />
            <ErrorMessage
              userData={this.props.userData.password}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.password}

            />
          </aside>
          <section>
            <ErrorMessage
              userData={this.props.userData.region}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.region}
            />
            <ErrorMessage
              userData={this.props.userData.adress}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.adress}
            />
            <ErrorMessage
              userData={this.props.userData.vaccineList}
              checkRegisterDisplay={this.props.checkRegisterDisplay}
            />
            <Input
              nameChange={this.props.nameChange}
              userData={this.props.userData.vaccineList}

            />
            <div id='button'>
              <button onClick={this.props.submit}>Enviar</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default FormRegister;