import React from 'react';
import './AgeVacines.css';
import Dropdown from 'react-bootstrap/Dropdown'

class AgeVacines extends React.Component {
  render() {
    return (
      <div className="AgeVacines">
        <h2>Vacinas</h2>
        <div className='VaccinesContainer'>
        <Dropdown>
          <Dropdown.Toggle className='VaccineAgeData' variant="success" id="dropdown-basic">
            <h3>Crianças</h3>
            <p>0-10 anos</p>
           </Dropdown.Toggle>

          <Dropdown.Menu className='VaccineAgeDropdown'>
            <Dropdown.Item className='VaccineAgeItem'>BCG (Bacilo Calmette-Guerin)</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Pentavalente</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Rotavírus</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle className='VaccineAgeData' variant="success" id="dropdown-basic">
            <h3>Adolescentes</h3>
            <p>11-19 anos</p>
           </Dropdown.Toggle>

          <Dropdown.Menu className='VaccineAgeDropdown'>
            <Dropdown.Item className='VaccineAgeItem'>HPV (Human Papiloma Vírus)</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Tríplice Viral</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Febre Amarela</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle className='VaccineAgeData' variant="success" id="dropdown-basic">
            <h3>Adultos</h3>
            <p>20-59 anos</p>
           </Dropdown.Toggle>

          <Dropdown.Menu className='VaccineAgeDropdown'>
            <Dropdown.Item className='VaccineAgeItem'>Hepatite B</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Dupla Adulto</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Pneumocócica 23 Valente</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle className='VaccineAgeData' variant="success" id="dropdown-basic">
            <h3>Idosos</h3>
            <p>60+ anos</p>
           </Dropdown.Toggle>

          <Dropdown.Menu className='VaccineAgeDropdown'>
            <Dropdown.Item className='VaccineAgeItem'>dTpa (Tríplice bacteriana acelular do tipo adulto)</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Febre Amarela</Dropdown.Item>
            <Dropdown.Item className='VaccineAgeItem'>Hepatite B</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
    );
  }
}

export default AgeVacines;