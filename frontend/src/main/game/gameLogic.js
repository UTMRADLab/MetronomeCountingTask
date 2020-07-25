import playNextRoundSound  from './sounds/';

const gameLogic = (nextRoundCallback) => {
  const successTarget = 20;
  const gameCatchTarget = 30;
  const roundDuration = 1000;
  let gameCount = 0;
  let usrCount = 0;
  let roundActive = false;

  const success = () => {
    stopGame();
    alert("correct!");
  };
  
  const gameCatch = () => {
    stopGame();
    alert("went over, caught by game");
  };
  
  const overcountMiss = () => {
    stopGame();
    alert("overcounting");
  };
  
  const undercountMiss = () => {
    stopGame();
    alert("undercounting");
  };
  
  const selfCatch = () => {
    stopGame();
    alert("self caught, the game will now reset");
  };
  
  const nextRound = () => {
    if (gameCount === gameCatchTarget) {
      gameCatch();
    } else {
      playNextRoundSound();
      gameCount++;
      roundActive = true;
      startGame();
      nextRoundCallback();
    }
  };
  
  const startGame = () => {
    setTimeout(nextRound, roundDuration);
  };
  
  const stopGame = () => {
    
  };
  
  const reactPress = () => {
    if(roundActive) {
      usrCount++;
      roundActive = false;
    }
  };
  
  const confirmDonePress = () => {
    if(gameCount === usrCount === successTarget) {
      success();
    } else if (usrCount < successTarget) {
      undercountMiss();
    } else if (usrCount > successTarget) {
      overcountMiss();
    }
  };
  
  const selfCatchPress = () => {
    selfCatch();
    gameCount = 0;
    usrCount = 0;
  };

  return {
    selfCatchPress,
    confirmDonePress,
    reactPress,
    startGame
  }
}

export default gameLogic;