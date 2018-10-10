import React, { Component } from 'react';
import  GenerateQuotes  from  './GenerateQuotes';
import  DisplayQuotes  from  './DisplayQuotes';

const sampleQuote =

{
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleQuote par défaut
      // afin d'avoir toujours une citation d'affichée
      quote: sampleQuote
    };
  }

  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div>
        <GenerateQuotes selectQuote={ () => this.getQuote() } />
        <DisplayQuotes quote={ this.state.quote } />
      </div>
    );
  }
}

export default App;
