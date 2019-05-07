import React from 'react';
import './HomeApp.css';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import About from '../About/About';

class HomeApp extends React.Component {
  render() {
    return (
      <div>
      <BannerCarousel/>
      <About/>
      </div>
    );
  }
}

export default HomeApp;