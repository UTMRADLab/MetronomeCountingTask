import React, {Component} from 'react';
import './game.css'
import gameLogic from './gameLogic';
class Game extends Component {
  render() {
    gameLogic.startGame();
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
