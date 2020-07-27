import playNextRoundSound  from './sounds/';

const gameLogic = (nextRoundCallback, reactCallback, clearCountsCallback) => {
  const successTarget = 20;
  const gameCatchTarget = 30;
  const roundDuration = 1000;
  let gameCount = 0;
  let usrCount = 0;
  let roundActive = false;
  let timeout;

  const clearCounts = () => {
    gameCount = 0;
    usrCount = 0;
  };

  const success = () => {
    stopGame();
    alert("correct!");
    startGame();
  };
  
  const gameCatch = () => {
    stopGame();
    alert("went over, caught by game");
    startGame();
  };
  
  const overcountMiss = () => {
    stopGame();
    alert("overcounting");
    startGame();
  };
  
  const undercountMiss = () => {
    stopGame();
    alert("undercounting");
    startGame();
  };
  
  const selfCatch = () => {
    stopGame();
    alert("self caught, the game will now reset");
    startGame();
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
    timeout = setTimeout(nextRound, roundDuration);
  };
  
  const stopGame = () => {
    clearInterval(timeout);
    clearCountsCallback();
    clearCounts();
  };
  
  const reactPress = () => {
    if(roundActive) {
      usrCount++;
      reactCallback();
      roundActive = false;
    }
  };
  
  const confirmDonePress = () => {
    if(gameCount === successTarget) {
      success();
    } else if (gameCount < successTarget) {
      undercountMiss();
    } else if (gameCount > successTarget) {
      overcountMiss();
    }
  };
  
  const selfCatchPress = () => {
    selfCatch();
  };

  return {
    selfCatchPress,
    confirmDonePress,
    reactPress,
    startGame
  }
}

export default gameLogic;