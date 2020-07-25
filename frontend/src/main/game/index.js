import React, {Component} from 'react';
import './game.css'
import gameLogic from './gameLogic';

class Game extends Component {
  confirmDone = () => {
    console.log("arrow up, confirm done");
  };
  
  react = () => {
    console.log("arrow right, react");
    this.incUsrCount();
  };
  
  selfCatch = () => {
    console.log("arrow down, self catch");
    this.clearCounts();
  };

  clearCounts = () => {
    this.setState({
      gameCount: 0,
      usrCount: 0
    });
  }

  incGameCount = () => {
    this.setState({
      gameCount: this.state.gameCount + 1,
      usrCount: this.state.usrCount
    });
  }

  incUsrCount = () => {
    this.setState({
      gameCount: this.state.gameCount,
      usrCount: this.state.usrCount + 1
    });
  }

  handleKeyPress = event => {
    if (event.key === "ArrowUp") this.confirmDone();
    if (event.key === "ArrowRight") this.react();
    if (event.key === "ArrowDown") this.selfCatch();
  };

  constructor(props) {
    super(props);
    this.state = {
      gameCount: 0,
      usrCount: 0
    }
    this.clearCounts = this.clearCounts.bind(this);
    this.incGameCount = this.incGameCount.bind(this);
    this.incUsrCount = this.incUsrCount.bind(this);

    const gameLogicFuncs = gameLogic(this.incGameCount);
    gameLogicFuncs.startGame();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return(
      <div>
        <p>game count: {this.state.gameCount}</p>
        <p>user count:  {this.state.usrCount}</p>
        <p>instructions</p>
        <p>right arrow goes to the next round</p>
        <p>down arrow self catches</p>
        <p>up arrow tells us when you're done</p>
      </div>
    );
  }
}

export default Game;
