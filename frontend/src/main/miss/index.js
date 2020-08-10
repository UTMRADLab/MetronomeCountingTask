import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Miss extends Component {
  render() {
    return(
      <div>
        <p>
          miss!
        </p>
        <p>
          you pressed done too early!
        </p>
        <p>
          <Link to="/game">Return to Game</Link>
        </p>
      </div>
    );
  }
}

export default Miss;
