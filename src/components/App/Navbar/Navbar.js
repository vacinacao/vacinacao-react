import React from 'react';
import LogoMS from '../../../assets/Ministerio_da_Saude-logo.png';
import Menu from './Menu/Menu';
import HamburguerButton from './HamburguerButton/HamburguerButton';
import './Navbar.css';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: 'Menu',
    }
  }

  toggleClickHandler = event => {

    event.target.classList.toggle('active');

    let newState = this.state;
    if (newState.menuOpen === 'Menu') {
      newState.menuOpen = 'Menu Open';
    }
    else {
      newState.menuOpen = 'Menu'
    }
    this.setState(newState);
  }

  render() {
    // let menu;

    // if (this.state.menuOpen === 1) {
    //   menu = 
    // }

    return (
      <div className="Navbar">
        <div className="LogoMS">
          <a href="/"><img src={LogoMS} alt='Logo'/></a>
        </div>
        <Menu setClass={this.state.menuOpen}/>
        <HamburguerButton click={this.toggleClickHandler}/>      
       </div>
    );
  }
}

export default Navbar;