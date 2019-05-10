import React from 'react';
import './BannerCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../assets/bannerHome1.jpg';
import Banner2 from '../../../assets/bannerHome2.jpg';


class BannerCarousel extends React.Component {
  render() {
    return (
      <div className="BannerCarousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner1}
              alt="Movimento Vacina Brasil"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner2}
              alt="Não coloque a vida de quem você ama em risco"
            />
          </Carousel.Item>
          
        </Carousel>
      </div>

    );
  }
}

export default BannerCarousel;