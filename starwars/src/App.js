import React, { Component } from 'react';
import CardItem from './components/CardItem'
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
          {this.state.starwars ? null : <CardItem starwarsChars={this.state.starwarsChars}/>} 
        </ul>
      </div>
    );
  }
}

export default App;
