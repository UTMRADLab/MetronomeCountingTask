import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SelfCatch extends Component {
  render() {
    return(
      <div>
        <p>
          self caught!
        </p>
        <p>
          please specify why you self caught
        </p>
        <p>
          <Link to="/game">Return to Game</Link>
        </p>
      </div>
    );
  }
}

export default SelfCatch;
