const successTarget = 20;
const selfCatchTarget = 30;
let gameCount = 0;
let usrCount = 0;
let roundActive = false;

const success = () => {
  alert("correct!");
};

const gameCatch = () => {
  alert("went over, caught by game");
};

const overcountMiss = () => {
  alert("overcounting");
};

const undercountMiss = () => {
  alert("undercounting");
};

const selfCatch = () => {
  alert("self caught, the game will now reset");
};

const roundMissed = () => {
  alert("round missed!");
};

const playNextRoundSound = () => {

};

const nextRound = () => {
  if(usrCount !== gameCount) roundMissed();
  gameCount++;
  playNextRoundSound();
  roundActive = true;
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