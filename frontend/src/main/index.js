import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Game from './game';
import Done from './done';
import Miss from './miss';
import Hit from './hit';
import SelfCatch from './selfCatch';
import GameCatch from './gameCatch';
import Break from './break';

class Main extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={Game} />
        <Route path="/done" component={Done} />
        <Route path="/miss" component={Miss} />
        <Route path="/hit" component={Hit} />
        <Route path="/selfCatch" component={SelfCatch} />
        <Route path="/gameCatch" component={GameCatch} />
        <Route path="/break" component={Break} />
      </Switch>
    );
  }
}

export default Main;
