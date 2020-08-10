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

      gameStartTime: 0,
      cycleStartTime: 0,
      soundTime: 0,
      userReactTime: 0,

      selfCatchPressed: false,
      confirmDonePressed: false
    }
    this.startGame = this.startGame.bind(this);
    this.playRun = this.playRun.bind(this);
    this.playSound = this.playSound.bind(this);
    this.startCycle = this.startCycle.bind(this);
    this.stopCycle = this.stopCycle.bind(this);
    this.confirmDone = this.confirmDone.bind(this);
    this.react = this.react.bind(this);
    this.selfCatch = this.selfCatch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  startGame = () => {
    let gameStartTime = new Date().getTime();
    this.setState({
      gameStartTime : gameStartTime
    })
    this.playRun();
  };

  playSound = () => {
    let soundTime = new Date().getTime();
    this.setState({
      soundTime: soundTime - this.state.gameStartTime
    });
    playRoundSound();
  };

  startCycle = () => {
    // start timers
    let cycleStartTime = new Date().getTime();
    this.setState({
      cycleStartTime: cycleStartTime - this.state.gameStartTime,
      roundActive: true
    });
    // play sound
    this.playSound();
  };

  stopCycle = () => {
    console.log({
      soundTime: this.state.soundTime,
      userReactTime: this.state.userReactTime,
      cycleStartTime: this.state.cycleStartTime,
      gameStartTime: this.state.gameStartTime
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
      this.playRun();
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
        userReactTime: reactTime - this.state.gameStartTime,
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

  playRun = () => {
    this.setState({
      gameCount : this.state.gameCount + 1,
      cycleStartTime : 0,
      soundTime : 0,
      userReactTime : 0,
    })
    this.startCycle();
    setTimeout(this.stopCycle, ROUND_DURATION);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.startGame();
  }

  render() {
    return(
      <div>
        <p>game count: {this.state.gameCount}</p>
        <p>user count: {this.state.usrCount}</p>
        <p>instructions</p>
        <p>right arrow goes to the next round</p>
        <p>down arrow self catches</p>
        <p>up arrow tells us when you're done</p>
      </div>
    );
  }
}

export default withRouter(Game);
