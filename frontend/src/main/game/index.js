import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './game.css';
import playRoundSound  from './sounds/';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setCycleStartTime,
  setTrialStartTime,
  setSoundTime,
  setUserReactTime,
  setRoundActiveTrue,
  setRoundActiveFalse
} from 'actions/gameActions';

const SUCCESS_TARGET = 20;
const GAME_CATCH_TARGET = 30;
const ROUND_DURATION = 1000;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCount: -1,
      usrCount: 0,

      selfCatchPressed: false,
      confirmDonePressed: false
    }
    this.start = this.start.bind(this);
    this.playTrial = this.playTrial.bind(this);
    this.playSound = this.playSound.bind(this);
    this.startTrial = this.startTrial.bind(this);
    this.stopTrial = this.stopTrial.bind(this);
    this.confirmDone = this.confirmDone.bind(this);
    this.react = this.react.bind(this);
    this.selfCatch = this.selfCatch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  start = () => {
    let cycleStartTime = new Date().getTime();
    this.props.setCycleStartTime(cycleStartTime);
    this.playTrial();
  };

  playSound = () => {
    let soundTime = new Date().getTime();
    this.props.setSoundTime(soundTime);
    playRoundSound();
  };

  startTrial = () => {
    // start timers
    let trialStartTime = new Date().getTime();
    this.props.setTrialStartTime(trialStartTime);
    this.props.setRoundActiveTrue();
    // play sound
    this.playSound();
  };

  stopTrial = () => {
    console.log({
      soundTime: this.props.game.soundTime,
      userReactTime: this.props.game.userReactTime,
      trialStartTime: this.props.game.trialStartTime,
      cycleStartTime: this.props.game.cycleStartTime
    });
    // stop timers
    this.props.setRoundActiveFalse();
    // check for any exit conditions
    if(this.state.selfCatchPressed) {
      // self catch
      console.log("self catch")
      this.props.history.push("/selfCatch");
    } else if (this.state.confirmDonePressed) {
      // confirm done
      if(this.state.gameCount === SUCCESS_TARGET) {
        // successful hit
        console.log("done hit!")
        this.props.history.push("/hit");
      } else {
        // miss
        console.log("done miss");
        this.props.history.push("/miss");
      }
    } else if (this.state.gameCount === GAME_CATCH_TARGET) {
      // game catch
      console.log("game catch");
      this.props.history.push("/gameCatch");
    } else {
      // if no exit conditions, play run again
      this.playTrial();
    }
    
  };

  confirmDone = () => {
    this.setState({
      confirmDonePressed: true
    });
  };
  
  react = () => {
    if(this.props.game.roundActive) {
      let reactTime = new Date().getTime();
      this.props.setUserReactTime(reactTime);
      this.props.setRoundActiveFalse();
      this.setState({
        usrCount: this.state.usrCount + 1,
      });
    }
  };
  
  selfCatch = () => {
    this.setState({
      selfCatchPressed: true
    });
  };

  handleKeyPress = event => {
    if (event.key === "ArrowUp") this.confirmDone();
    if (event.key === "ArrowRight") this.react();
    if (event.key === "ArrowDown") this.selfCatch();
  };

  playTrial = () => {
    this.props.setTrialStartTime(0);
    this.props.setUserReactTime(0);
    this.setState({
      gameCount : this.state.gameCount + 1,
    })
    this.startTrial();
    setTimeout(this.stopTrial, ROUND_DURATION);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.start();
  }

  render() {
    return(
      <div>
        <p>trial count for cycle: {this.state.gameCount}</p>
        <p>user count for cycle: {this.state.usrCount}</p>
        <p>instructions</p>
        <p>right arrow goes to the next round</p>
        <p>down arrow self catches</p>
        <p>up arrow tells us when you're done</p>
      </div>
    );
  }
}

Game.propTypes = {
  setCycleStartTime: PropTypes.func,
  cycleStartTime: PropTypes.number,
  trialStartTime: PropTypes.number
};

const mapStateToProps = state => ({
  game: state.game
});

const gameWithRouter = withRouter(Game)
const gameWithRouterAndRedux = connect(mapStateToProps, {
  setCycleStartTime,
  setTrialStartTime,
  setSoundTime,
  setUserReactTime,
  setRoundActiveTrue,
  setRoundActiveFalse
})(gameWithRouter);
export default gameWithRouterAndRedux;
