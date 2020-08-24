import React, { Component } from 'react';
import Countdown from 'react-countdown';
import { connect } from 'react-redux';
import {
  decBreakCount
} from 'actions/breakActions';
import { withRouter } from "react-router-dom";

class Break extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 2
    };
    this.renderer = this.renderer.bind(this);
    this.returnToGame = this.returnToGame.bind(this);
  };

  returnToGame = () => {
    this.props.decBreakCount();
    this.props.history.push("/game")
  };

  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <p>
          <button onClick={this.returnToGame}>
            Return to Game
          </button>
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

  render() {
    const minutesInMilliseconds = this.props.break.breakMinuteDuration * 60 * 1000;
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
            renderer={this.renderer} />
        </div>
      </div>
    );
  }
}

const mapStateToPropsBreak = state => ({
  break: state.break
});

const BreakWithRedux = connect(
  mapStateToPropsBreak,
  {
    decBreakCount
  }
)(Break);

export default withRouter(BreakWithRedux);
