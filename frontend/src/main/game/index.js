import React, {Component} from 'react';
import './game.css'
import Anime, {anime} from 'react-anime';
class Game extends Component {
  render() {
    return(
      <Anime scale={[.1, .9]}
        loop={true}>
        <div class="ball" />
      </Anime>
    );
  }
}

export default Game;