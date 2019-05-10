import React from 'react';
import './Map.css';
import GoogleMaps from './GoogleMaps/GoogleMaps';

class Map extends React.Component {
  render() {
    return (
      <div className="Map">
        <div className="formMap">
          <h2>Encontre o posto mais próximo de você!</h2>
          <label>Digite seu CEP:</label>
          <input type="number" name="CEP" />
          <button>Pesquisar meu CEP</button>
        </div>

        <div className="googleMaps">
          <GoogleMaps />
        </div>
      </div>
    );
  }
}

export default Map;