import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GameCatch extends Component {
  render() {
    return(
      <div>
        <p>
          caught by game!
        </p>
        <p>
          <Link to="/game">Return to Game</Link>
        </p>
      </div>
    );
  }
}

export default GameCatch;
