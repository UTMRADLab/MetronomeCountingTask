import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './game.css';
import playRoundSound  from './sounds/';
import { connect } from 'react-redux';
import {
  setCycleStartTime,
  setTrialStartTime,
  setSoundTime,
  setUserReactTime,
  setRoundActiveTrue,
  setRoundActiveFalse,
  setSelfCatchPressedTrue,
  setSelfCatchPressedFalse,
  setConfirmDonePressedTrue,
  setConfirmDonePressedFalse,
  incGameCount,
  incUserCount,
  resetGameCount,
  resetUserCount
} from 'actions/gameActions';
import {
  stopBlockTimer
} from 'actions/counterActions';

const SUCCESS_TARGET = 20;
const GAME_CATCH_TARGET = 30;
const ROUND_DURATION = 1000;

class Game extends Component {
  constructor(props) {
    super(props);
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
    this.props.resetGameCount();
    this.props.resetUserCount();
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
    if(this.props.game.selfCatchPressed) {
      // self catch
      console.log("self catch")
      this.props.history.push("/selfCatch");
    } else if (this.props.game.confirmDonePressed) {
      // confirm done
      if(this.props.game.gameCount === SUCCESS_TARGET) {
        // successful hit
        console.log("done hit!")
        this.props.history.push("/hit");
      } else {
        // miss
        console.log("done miss");
        this.props.history.push("/miss");
      }
    } else if (this.props.game.gameCount === GAME_CATCH_TARGET) {
      // game catch
      console.log("game catch");
      this.props.history.push("/gameCatch");
    } else {
      // if no exit conditions, play run again
      this.playTrial();
    }
    
  };

  confirmDone = () => {
    this.props.setConfirmDonePressedTrue();
  };
  
  react = () => {
    if(this.props.game.roundActive) {
      let reactTime = new Date().getTime();
      this.props.setUserReactTime(reactTime);
      this.props.setRoundActiveFalse();
      this.props.incUserCount();
    }
  };
  
  selfCatch = () => {
    this.props.setConfirmDonePressedTrue();
  };

  handleKeyPress = event => {
    if (event.key === "ArrowUp") this.confirmDone();
    if (event.key === "ArrowRight") this.react();
    if (event.key === "ArrowDown") this.selfCatch();
  };

  playTrial = () => {
    this.props.setTrialStartTime(0);
    this.props.setUserReactTime(0);
    this.props.incGameCount();
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
        <p>trial count for cycle: {this.props.game.gameCount}</p>
        <p>user count for cycle: {this.props.game.usrCount}</p>
        <p>instructions</p>
        <p>right arrow goes to the next round</p>
        <p>down arrow self catches</p>
        <p>up arrow tells us when you're done</p>
      </div>
    );
  }
}

const mapStateToPropsGame = state => ({
  game: state.game
});

const mapStateToPropsCounter = state => ({
  counter: state.counter
});

const gameWithRouter = withRouter(Game)
const gameWithRouterAndGameRedux = connect(
  mapStateToPropsGame,
  {
    setCycleStartTime,
    setTrialStartTime,
    setSoundTime,
    setUserReactTime,
    setRoundActiveTrue,
    setRoundActiveFalse,
    setSelfCatchPressedTrue,
    setSelfCatchPressedFalse,
    setConfirmDonePressedTrue,
    setConfirmDonePressedFalse,
    incGameCount,
    incUserCount,
    resetGameCount,
    resetUserCount
  })(gameWithRouter);
const gameWithEverything = connect(
  mapStateToPropsCounter,
  {
    stopBlockTimer
  })(gameWithRouterAndGameRedux);
export default gameWithEverything;
