import React, {Component} from 'react';
import './game.css'
import Anime from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'
class Game extends Component {
  render() {
    return(
      <div>
        <p>test</p>
        <FontAwesomeIcon icon={faArrowUp} size="3x" />
        <br />
        <br />
        <FontAwesomeIcon icon={faArrowRight} size="3x"/>
        <br />
        <br />
        <Anime direction='alternate'
        loop={true}
        scale={[.5, 1]}>
          <div className="ball" />
        </Anime>
      </div>
    );
  }
}

export default Game;
