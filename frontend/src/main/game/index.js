import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import './game.css';
import playRoundSound  from './sounds/';

const SUCCESS_TARGET = 20;
const GAME_CATCH_TARGET = 30;
const ROUND_DURATION = 1000;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCount: -1,
      usrCount: 0,

      roundActive: false,

      cycleStartTime: 0,
      trialStartTime: 0,
      soundTime: 0,
      userReactTime: 0,

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
    this.setState({
      cycleStartTime : cycleStartTime
    })
    this.playTrial();
  };

  playSound = () => {
    let soundTime = new Date().getTime();
    this.setState({
      soundTime: soundTime - this.state.cycleStartTime
    });
    playRoundSound();
  };

  startTrial = () => {
    // start timers
    let trialStartTime = new Date().getTime();
    this.setState({
      trialStartTime: trialStartTime - this.state.cycleStartTime,
      roundActive: true
    });
    // play sound
    this.playSound();
  };

  stopTrial = () => {
    console.log({
      soundTime: this.state.soundTime,
      userReactTime: this.state.userReactTime,
      trialStartTime: this.state.trialStartTime,
      cycleStartTime: this.state.cycleStartTime
    });
    // stop timers
    this.setState({
      roundActive: false
    });
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
    if(this.state.roundActive) {
      let reactTime = new Date().getTime();
      this.setState({
        usrCount: this.state.usrCount + 1,
        userReactTime: reactTime - this.state.cycleStartTime,
        roundActive: false
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
    this.setState({
      gameCount : this.state.gameCount + 1,
      trialStartTime : 0,
      soundTime : 0,
      userReactTime : 0,
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

export default withRouter(Game);
