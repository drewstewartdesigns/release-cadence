import React, { Component } from 'react';

import { Week } from './components/week/week.component';
import { Day } from './components/day/day.component';

import './App.css';

class App extends Component {

  render() {
    const weeks = [
      {name: 'Week 1', id: 1},
      {name: 'Week 2', id: 2},
      {name: 'Week 1', id: 3},
      {name: 'Week 2', id: 4}
    ];

    const days = [
      {name: 'Wed', number: 1, id: 1},
      {name: 'Th', number: 2, id: 2},
      {name: 'Fri', number: 3, id: 3},
      {name: 'Mon', number: 4, id: 4},
      {name: 'Tue', number: 5, id: 5},
      {name: 'Wed', number: 6, id: 6},
      {name: 'Th', number: 7, id: 7},
      {name: 'Fri', number: 8, id: 8},
      {name: 'Mon', number: 9, id: 9},
      {name: 'Tue', number: 10, id: 10},
      {name: 'Wed', number: 1, id: 11},
      {name: 'Th', number: 2, id: 12},
      {name: 'Fri', number: 3, id: 13},
      {name: 'Mon', number: 4, id: 14},
      {name: 'Tue', number: 5, id: 15},
      {name: 'Wed', number: 6, id: 16},
      {name: 'Th', number: 7, id: 17},
      {name: 'Fri', number: 8, id: 18},
      {name: 'Mon', number: 9, id: 19},
      {name: 'Tue', number: 10, id: 20}
    ];

    return (
      <div className="App">
        <header className="App-header">
          <h1>WCS Release Cadence</h1>
        </header>
        <Week weeks={weeks} />
        <Day days={days} />
      </div>
    );
  }
}

export default App;
