import React from 'react';
import './VaccineHover.css';

class VaccineHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Nome da Vacina',
    }
  }
  //set the text
  onMouseover (e) {
    this.setState({text: 'Descrição'})
  }
  //clear the text
  onMouseout (e) {
    this.setState({text: 'Nome da Vacina'})
  }
  render () {
     const {text} = this.state;
     return (
       <div 
         onMouseEnter={this.onMouseover.bind(this)}
         onMouseLeave={this.onMouseout.bind(this)}>{text}
      </div>
     )
  }
}

export default VaccineHover;