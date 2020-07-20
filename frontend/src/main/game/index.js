import React, {Component} from 'react';
import './game.css'
import gameLogic from './gameLogic';

const handleKeyPress = event => {
  if (event.key === "ArrowUp") console.log("arrow up");
  if (event.key === "ArrowRight") console.log("arrow right");
  if (event.key === "ArrowDown") console.log("arrow down");
};
class Game extends Component {
  componentDidMount() {
    document.addEventListener('keydown', handleKeyPress);
  }

  render() {
    return(
      <div>
        <p>instructions</p>
        <p>right arrow goes to the next round</p>
        <p>down arrow self catches</p>
        <p>up arrow tells us when you're done</p>
      </div>
    );
  }
}

export default Game;
