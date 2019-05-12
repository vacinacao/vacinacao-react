import React from 'react';
import './Input.css';

class Input extends React.Component {
    render() {
        return (
        <div className='Input'>
            <div className={this.props.userData.inputData.name}>
                <label htmlFor={this.props.userData.inputData.name}>{this.props.userData.inputData.label}</label>
                <input
                    onChange={this.props.nameChange}
                    name={this.props.userData.inputData.name}
                    type={this.props.userData.inputData.type}
                    value={this.props.userData.inputData.value}
                    maxLength={this.props.userData.inputData.maxLength}
                />
            </div>
        </div>
        );
    }
}

export default Input;