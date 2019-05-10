import React from 'react';
import './CardView.css';


class CardView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            textVaccine1: 'BCG (Bacilo Calmette-Guerin)',
            textVaccine2: 'Hepatite B',
            textVaccine3: 'Pentavalente',
            textVaccine4: 'VIP (Vacina Inativada Poliomielite)',
            textVaccine5: 'Pneumocócica 10 Valente',
            textVaccine6: 'Rotavírus'
        }
    }

    onMouseover1 = () => {
        if (this.state.textVaccine1 === 'BCG (Bacilo Calmette-Guerin)') {
            let newState = this.state
            newState.textVaccine1 = 'Dose Única. Previne a Tuberculose - principalmente as formas graves, como meningite tuberculosa e tuberculose miliar (espalhada pelo corpo).';
            this.setState(newState);
        }
    };

    onMouseover2 = () => {
        if (this.state.textVaccine2 === 'Hepatite B') {
            let newState = this.state
            newState.textVaccine2 = 'Dose Única. Previne infecção no fígado causada pelo vírus da hepatite B.';
            this.setState(newState);
        }
    };

    onMouseover3 = () => {
        if (this.state.textVaccine3 === 'Pentavalente') {
            let newState = this.state
            newState.textVaccine3 = '1ª Dose. Previne difteria, tétano, coqueluche, hepatite B e meningite e infecções por HiB.';
            this.setState(newState);
        }
    };

    onMouseover4 = () => {
        if (this.state.textVaccine4 === 'VIP (Vacina Inativada Poliomielite)') {
            let newState = this.state
            newState.textVaccine4 = '1ª Dose. Previne poliomielite ou paralisia infantil.';
            this.setState(newState);
        }
    };

    onMouseover5 = () => {
        if (this.state.textVaccine5 === 'Pneumocócica 10 Valente') {
            let newState = this.state
            newState.textVaccine5 = '1ª Dose. Previne pneumonia, otite, meningite e outras doenças causadas pelo Pneumococo.';
            this.setState(newState);
        }
    };

    onMouseover6 = () => {
        if (this.state.textVaccine6 === 'Rotavírus') {
            let newState = this.state
            newState.textVaccine6 = '1ª Dose. Previne diarreia por rotavírus.';
            this.setState(newState);
        }
    };


    onMouseout1 = () => {
        if (this.state.textVaccine1 === 'Dose Única. Previne a Tuberculose - principalmente as formas graves, como meningite tuberculosa e tuberculose miliar (espalhada pelo corpo).') {
            let newState = this.state
            newState.textVaccine1 = 'BCG (Bacilo Calmette-Guerin)';
            this.setState(newState);
        }
    };

    onMouseout2 = () => {
        if (this.state.textVaccine2 === 'Dose Única. Previne infecção no fígado causada pelo vírus da hepatite B.') {
            let newState = this.state
            newState.textVaccine2 = 'Hepatite B';
            this.setState(newState);
        }
    };

    onMouseout3 = () => {
        if (this.state.textVaccine3 === '1ª Dose. Previne difteria, tétano, coqueluche, hepatite B e meningite e infecções por HiB.') {
            let newState = this.state
            newState.textVaccine3 = 'Pentavalente';
            this.setState(newState);
        }
    };

    onMouseout4 = () => {
        if (this.state.textVaccine4 === '1ª Dose. Previne poliomielite ou paralisia infantil.') {
            let newState = this.state
            newState.textVaccine4 = 'VIP (Vacina Inativada Poliomielite)';
            this.setState(newState);
        }
    };

    onMouseout5 = () => {
        if (this.state.textVaccine5 === '1ª Dose. Previne pneumonia, otite, meningite e outras doenças causadas pelo Pneumococo.') {
            let newState = this.state
            newState.textVaccine5 = 'Pneumocócica 10 Valente';
            this.setState(newState);
        }
    };

    onMouseout6 = () => {
        if (this.state.textVaccine6 === '1ª Dose. Previne diarreia por rotavírus.') {
            let newState = this.state
            newState.textVaccine6 = 'Rotavírus';
            this.setState(newState);
        }
    };


    render() {
        return (
            <div className='CardView'>
                <h2>Minhas Vacinas</h2>
                <div className='Vaccines'>
                    <div className='ColorOk' onMouseEnter={this.onMouseover1} onMouseLeave={this.onMouseout1} style={{ height: this.onMouseover2 ? 'auto' : '100px' }}>
                        <h3>{this.state.textVaccine1}</h3>
                    </div>
                    <div className='ColorOk' onMouseEnter={this.onMouseover2} onMouseLeave={this.onMouseout2} style={{ height: this.onMouseover2 ? 'auto' : '100px' }}>
                        <h3>{this.state.textVaccine2}</h3>
                    </div>
                    <div className='ColorPending' onMouseEnter={this.onMouseover3} onMouseLeave={this.onMouseout3} style={{ height: this.onMouseover3 ? 'auto' : '100px' }}>
                        <h3>{this.state.textVaccine3}</h3>
                    </div>
                    <div className='ColorOk' onMouseEnter={this.onMouseover4} onMouseLeave={this.onMouseout4} style={{ height: this.onMouseover4 ? 'auto' : '100px' }}>
                        <h3>{this.state.textVaccine4}</h3>
                    </div>
                    <div className='ColorPending' onMouseEnter={this.onMouseover5} onMouseLeave={this.onMouseout5} style={{ height: this.onMouseover5 ? 'auto' : '100px' }}>
                        <h3>{this.state.textVaccine5}</h3>
                    </div>
                    <div className='ColorPending' onMouseEnter={this.onMouseover6} onMouseLeave={this.onMouseout6} style={{ height: this.onMouseover6 ? 'auto' : '100px' }}>
                        <h3>{this.state.textVaccine6}</h3>
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