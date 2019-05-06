import React from 'react';
import LogoMS from '../../../assets/Ministerio_da_Saude-logo.png';
import Menu from './Menu/Menu';
import HamburguerButton from './HamburguerButton/HamburguerButton';
import './Navbar.css';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  toggleClickHandler = event => {

    event.target.classList.toggle('active');

    let newState = this.state;
    newState.menuOpen = !newState.menuOpen;
    this.setState(newState);
  }

  render() {
    let menu;

    if (this.state.menuOpen) {
      menu = <Menu/>
    }

    return (
      <div className="Navbar">
        <div className="LogoMS">
          <a href="/"><img src={LogoMS} alt='Logo'/></a>
        </div>
       {menu}
       <HamburguerButton click={this.toggleClickHandler}/>      
       </div>
    );
  }
}

export default Navbar;