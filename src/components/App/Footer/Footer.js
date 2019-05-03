import React from 'react';
import LogoGov from '../../../assets/marca_gov.png';
import LogoMastertech from '../../../assets/logo-mastertech-branco.png';
import Caio from '../../../assets/Caio.jpg';
import Camila from '../../../assets/Camila.jpg';
import Italo from '../../../assets/Italo.jpg';
import Lucas from '../../../assets/Lucas.jpg';
import Luis from '../../../assets/Luis.jpg';
import Thiago from '../../../assets/Thiago.jpg';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Side">
            <div className="LogoGov">
              <img src={LogoGov}/>
            </div>
            <div className="InfoGov"> 
              <p>O projeto Vacina Brasil é mais uma iniciativa do Governo Federal para promover ao cidadão acesso à informações básicas e autenticadas disponíveis no banco de dados do Ministério da Saúde.  </p>
            </div>
        </div>
        <div className="Side">
            <div className="Mastertech">
              <img src={LogoMastertech}/>
              <p>Este site foi desenvolvido como projeto de conclusão de curso de desenvolvimento FrontEnd 2019.1 sob orientação do professor Lucas Mello. </p>
            </div>
            <div className="Members"> 
              <div className="Member">
                <img src={Caio}/>
              </div>
              <div className="Member">
                <img src={Camila}/>
              </div>
              <div className="Member">
                <img src={Italo}/>
              </div>
              <div className="Member">
                <img src={Lucas}/>
              </div>
              <div className="Member">
                <img src={Luis}/>
              </div>
              <div className="Member">
                <img src={Thiago}/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;