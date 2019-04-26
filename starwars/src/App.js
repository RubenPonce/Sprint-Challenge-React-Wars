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
    // this.getCharacters('https://swapi.co/api/people/?page=2');

  }
  next = (url) => {
    if (url) {
      this.getCharacters(url)
    }
  }

  prev = (url) => {
    if (url) {
      console.log(url)
      this.getCharacters(url)
    }
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
        console.log(data.previous)
        this.setState({
          starwarsChars: data.results,
          urlNext: data.next,
          urlPrev: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="title">

          <button onClick={() => this.prev(this.state.urlPrev)}>{"<"}</button>
          <h1 className="Header">React Wars</h1>
          <button onClick={() => this.next(this.state.urlNext)}>{">"}</button>
        </div>
        <ul className="card-items">
          <CardItem starwarsChars={this.state.starwarsChars} />
        </ul>

        {console.log(this.state.starwarsChars)}


      </div>
    );
  }
}

export default App;
