import React from 'react';
import './FormRegister.css';
import Input from './Input/Input';
import CheckRegister from '../CheckRegister/CheckRegister';

class FormRegister extends React.Component {
  render() {
    return (
      <div className="FormRegister">
        <CheckRegister
          formRegisterValidate={this.props.formRegisterValidate}
          display={this.props.checkRegisterDisplay}
        />
        <h2>Registro:</h2>
        <div className="fieldsInputs">
          <aside>
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.name.inputData}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.email.inputData}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.cpf.inputData}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.birthDate.inputData}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.password.inputData}

            />
          </aside>
          <section>
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.region.inputData}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.adress.inputData}
            />
            <Input
              nameChange={this.props.nameChange}
              inputData={this.props.userData.vaccineList.inputData}

            />
          </section>
          <button onClick={this.props.submit}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default FormRegister;