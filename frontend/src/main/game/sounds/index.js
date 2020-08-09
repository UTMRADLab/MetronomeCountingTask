const playRoundSound = () => {
  const metronomeSoundUrl = "https://media.vocaroo.com/mp3/l4ntmbOu79y";
  const metronomeSound = new Audio(metronomeSoundUrl);
  metronomeSound.play();
};

export default playRoundSound;