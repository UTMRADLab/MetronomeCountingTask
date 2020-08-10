import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Hit extends Component {
  render() {
    return(
      <div>
        <p>
          hit!
        </p>
        <p>
          you pressed done correctly!
        </p>
        <p>
          <Link to="/game">Return to Game</Link>
        </p>
      </div>
    );
  }
}

export default Hit;
