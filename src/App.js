import React, { Component } from 'react';

import { WeeksData } from './data/weeks';
import { CadenceData } from './data/cadence';
import { Week } from './components/week/week.component';
import { Cadence } from './components/cadence/cadence.component';


import './App.css';

class App extends Component {

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <h1>WCS Release Cadence</h1>
        </header>
        <Week weeks={WeeksData} />
        <Cadence cadence={CadenceData} />
      </div>
    );
  }
}

export default App;
