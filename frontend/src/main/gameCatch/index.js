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
          please specify why the game caught you
        </p>
        <input type="radio" id="miscounted" name="reason" value="miscounted" />
        <label for="miscounted">miscounted</label>
        <br />
        <input type="radio" id="tired" name="reason" value="tired" />
        <label for="tired">got tired</label>
        <br />
        <input type="radio" id="spaced" name="reason" value="spaced" />
        <label for="spaced">spaced out</label>
        <p>
          <Link to="/game">Return to Game</Link>
        </p>
      </div>
    );
  }
}

export default GameCatch;
