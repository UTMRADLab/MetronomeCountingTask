import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './home/';
import Game from './game/';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/game" component={Game} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
