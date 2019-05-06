import React from 'react';
import './HamburguerButton.css';

class HamburguerButton extends React.Component {
  
  render() {
    return (
      <div className="HamburguerButton" onClick={this.props.click}>
        <span className="Dash"></span>
        <span className="Dash"></span>
        <span className="Dash"></span>
      </div>
    );
  }
}

export default HamburguerButton;


