import React from 'react';
import './GoogleMaps.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class GoogleMaps extends React.Component {
    render() {
        return (
            <div className='googleMap'>
                <Map
                    google={this.props.google}
                     style={{width: '100%', height: '700px', borderRadius: '10px', position: 'relative'}}
                    initialCenter={{
                        lat: -23.5513206,
                        lng: -46.6819499
                    }}
                    zoom={12}
                //   onClick={this.onMapClicked}
                />
            </div>
        )
    }
}

// export default GoogleMaps;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCZsjf0S-SVY1DobmorS9DaX-1-_rfaoGY")
})(GoogleMaps)


