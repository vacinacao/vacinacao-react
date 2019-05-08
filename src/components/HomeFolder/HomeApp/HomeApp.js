import React from 'react';
import './HomeApp.css';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import About from '../About/About';
import Map from '../Map/Map';

class HomeApp extends React.Component {
  render() {
    return (
      <div>
      <BannerCarousel/>
      <About/>
      <Map/>
      </div>
    );
  }
}

export default HomeApp;