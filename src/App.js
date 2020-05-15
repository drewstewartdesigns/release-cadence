import React, { Component } from 'react';

import { Week } from './components/week/week.component';
import { Cadence } from './components/cadence/cadence.component';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      weeksData: [],
      cadenceData: []
    };
  }
  intervalId;

  componentDidMount() {
    fetch('https://api.jsonbin.io/b/5e965671435f5604bb418da0/2', {
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
      </div>
    );
  }
}

export default App;
