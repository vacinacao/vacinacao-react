import React from 'react';
import './Map.css';
import GoogleMaps from './GoogleMaps/GoogleMaps';

class Map extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cepInputValue: '',
    }
  }

  handleCepApi = ()=>{
    fetch(`https://viacep.com.br/ws/${this.state.cepInputValue}/json/`)
        .then ((response)=>response.json())
        .then (function(json){
            console.log(json);
        });
}

  handleInputValueChange = (event)=>{
    let newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="Map">
        <div className="formMap">
          <h2>Encontre o posto mais próximo de você!</h2>
          <label>Digite seu CEP:</label>
          <input onChange={this.handleInputValueChange} type="number" name="cepInputValue" value={this.state.cep}/>
          <button onClick={this.handleCepApi}>Pesquisar meu CEP</button>
        </div>

        <div className="googleMaps">
          <GoogleMaps />
        </div>
      </div>
    );
  }
}

export default Map;