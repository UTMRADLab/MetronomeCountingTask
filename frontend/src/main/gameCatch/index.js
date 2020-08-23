import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class GameCatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reason: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      reason: event.target.value
    });
  }

  render() {
    return(
      <div>
        <p>
          caught by game!
        </p>
        <p>
          please specify why the game caught you
        </p>
        <br />
        <input
          type="radio"
          id="tired"
          name="reason"
          value="tired"
          checked={this.state.reason === "tired"}
          onChange={this.handleChange}/>
        <label htmlFor="tired">
          got tired
        </label>
        <br />
        <input
          type="radio"
          id="spaced"
          name="reason"
          value="spaced"
          checked={this.state.reason === "spaced"}
          onChange={this.handleChange}/>
        <label htmlFor="spaced">
          spaced out
        </label>
        <br />
        <input
          type="radio"
          id="miscounted"
          name="reason"
          value="miscounted"
          checked={this.state.reason === "miscounted"}
          onChange={this.handleChange}/>
        <label htmlFor="miscounted">
          miscounted
        </label>
        <p>
          <Link to="/game">Return to Game</Link>
        </p>
      </div>
    );
  }
}

export default GameCatch;
