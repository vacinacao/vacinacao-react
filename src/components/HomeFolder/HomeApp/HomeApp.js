import React from 'react';
import './HomeApp.css';
import BannerCarousel from '../BannerCarousel/BannerCarousel';

class HomeApp extends React.Component {
  render() {
    return (
      <div>
      <BannerCarousel/>
      </div>
    );
  }
}

export default HomeApp;