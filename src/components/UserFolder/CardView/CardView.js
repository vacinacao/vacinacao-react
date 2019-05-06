import React from 'react';
import './CardView.css';

class CardView extends React.Component {
  render() {
    return (
      <div className='CardView'>
        <h2>Minhas Vacinas</h2>
        <div className='Vaccines'>
            <div className='ColorOk'>
                <h3>BCG (Bacilo Calmette-Guerin)</h3>
            </div>
            <div className='ColorOk'>
                <h3>Hepatite B</h3>
            </div>
            <div className='ColorPending'>
                <h3>Pentavalente</h3>
            </div>
            <div className='ColorPending'>
                <h3>VIP (Vacina Inativada Poliomielite)</h3>
            </div>
            <div className='ColorOk'>
                <h3>Pneumocócica 10 Valente</h3>
            </div>
            <div className='ColorPending'>
                <h3>Rotavírus</h3>
            </div>
        </div>
        <h3>Legenda</h3>
        <div className='Subtitle'>
            <div className='SubtitleSquare SubtitleColors'>
                <p className='SubtitleSquare ColorOk'>Vacinação em dia</p>
            </div>
            <div className='SubtitleColors'>
                <p className='SubtitleSquare ColorPending'>Vacinação pendente</p>
            </div>
        </div>
      </div>
    );
  }
}

export default CardView;