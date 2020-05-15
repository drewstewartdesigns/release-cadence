import React, { Component } from 'react';

import { Week } from './components/week/week.component';
import { Cadence } from './components/cadence/cadence.component';


import './App.css';
import { Drinks } from './components/drinks/drinks.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weeksData: [],
      cadenceData: [],
      drinksData: []
    };
  }
  intervalId;

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5e965671435f5604bb418da0/3', {
      headers: {
        'secret-key': '$2b$10$MQuD7G12QB6V.MOYR5ipmumeCn5gd6lcfG/A3IPAvWYsSpElwD5Pe'
      }
    })
      .then(response => response.json())
      .then(data => this.setState({
        weeksData: data.weeks,
        cadenceData: data.cadence
      }))
      .catch((error) => {
        console.log('Error: ', error);
      });

    this.intervalId = setInterval(
      () => window.location.reload(),
      14400000// 4 hours
    );

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => this.setState({
        drinksData: data.drinks
      }));
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WCS Release Cadence</h1>
        </header>
        <Week weeks={this.state.weeksData} />
        <Cadence cadence={this.state.cadenceData} />
        <Drinks drinks={this.state.drinksData} />
      </div>
    );
  }
}

export default App;
