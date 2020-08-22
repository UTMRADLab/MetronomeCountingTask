import React, {Component} from 'react';
import {
  startBlockTimer
} from 'actions/counterActions';
import {
  storeID
} from 'actions/dataActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    const rawUrl = this.props.location.search;
    const idString = new URLSearchParams(rawUrl).get("id");
    const idIsNumber = !isNaN(idString);
    if(idIsNumber) {
      const idNum = Number(idString);
      this.props.storeID(idNum);
    }
  }

  startGame = () => {
    this.props.startBlockTimer();
    this.props.history.push("/game");
  };

  render() {
    return(
      <div>
        <p>
          Metronome Counting Task
        </p>
        <p>
          Click the button below to proceed with the task
        </p>
        <p>
          <button onClick={this.startGame}>Start Game</button>
        </p>
      </div>
    );
  }
}

const mapStateToPropsData = state => ({
  data: state.data
});

const mapStateToPropsCounter = state => ({
  counter: state.counter
});

const HomeWithCounter = connect(
  mapStateToPropsCounter,
  {
    startBlockTimer
  })(Home);

const HomeWithRedux = connect(
  mapStateToPropsData,
  {
    storeID
  })(HomeWithCounter);

export default withRouter(HomeWithRedux);
