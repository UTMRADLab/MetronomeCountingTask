import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <p>
          Metronome Counting Task
        </p>
        <p>
          Click the button below to proceed with the task
        </p>
        <p>
          <Link to="/game">Game</Link>
        </p>
      </div>
    );
  }
}

export default Home;
