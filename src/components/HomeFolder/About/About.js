import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="Purpose">
          <h2>Não deixe que doenças já erradicadas no país voltem. Vacine-se!</h2>
          <p>O ditado popular “melhor prevenir do que remediar” se aplica perfeitamente à vacinação. Muitas doenças comuns no Brasil e no mundo deixaram de ser um problema de saúde pública por causa da vacinação massiva da população. Poliomielite, sarampo, rubéola, tétano e coqueluche são só alguns exemplos de doenças comuns no passado e que as novas gerações só ouvem falar em histórias. Nesta página, você vai encontrar as principais informações e orientações sobre as vacinas disponíveis gratuitamente no âmbito do Sistema Único de Saúde (SUS).</p>
          <p>Por isso, não podemos deixar de buscar as vacinas disponíveis nas salas de vacinação, nas Unidades Básicas de Saúde (UBS). São 300 milhões de doses das vacinas incluídas no Calendário Nacional de Vacinação.</p>
        </div>
        <div className="Video">
          <iframe width="100%" height="400px" src="https://www.youtube.com/embed/cSG3-7IF4Gc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title='youtubeVideo'></iframe>
        </div>
      </div>
    );
  }
}

export default About;