import React from 'react';
import './Input.css';

class Input extends React.Component {
    render() {
        return (
            <div className={this.props.inputData.name}>
            <label htmlFor={this.props.inputData.name}>{this.props.inputData.label}</label>
            <input
            onChange={this.props.nameChange}
            name={this.props.inputData.name} 
            type={this.props.inputData.type}
            value={this.props.inputData.value} 
            maxLength={this.props.inputData.maxLength}
            />
          </div>
        );
    }
}

export default Input;