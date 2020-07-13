import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Game from './game';

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={Game} />
      </Switch>
    );
  }
}

export default Main;
