import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getCharacters('https://swapi.co/api/people/?page=2');

  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: [...this.state.starwarsChars, data.results],
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">

        <h1 className="Header">React Wars</h1>
        {console.log(this.state.starwarsChars)}
        <ul className="card-items">
          {this.state.starwarsChars.map(array => array.map(character =>
            <div className="character-card" key={character.name}>
              <li className="character-name">{character.name}</li>
              <h3>birth year: {character.birth_year}</h3>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
