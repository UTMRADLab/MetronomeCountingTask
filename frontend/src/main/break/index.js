import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <p>
        <Link to="/game">Return to Game</Link>
      </p>
    );
  } else {
    return (
      <p>
        {minutes} minutes {seconds} seconds
      </p>
    );
  }
};

class Break extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 2
    };
  };

  render() {
    const minutesInMilliseconds = this.state.minutes * 60 * 1000;
    const completionDate = Date.now() + minutesInMilliseconds;

    return(
      <div>
        <p>
          taking a break
        </p>
        <p>
          time left:
        </p>
        <div>
          <Countdown
            date={completionDate}
            renderer={renderer} />
        </div>
      </div>
    );
  }
}

export default Break;
