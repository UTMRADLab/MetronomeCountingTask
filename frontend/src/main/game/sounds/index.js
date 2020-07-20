const playNextRoundSound = () => {
  const metronomeSoundPath = "./metronomeMono.wav"
  const metronomeSound = new Audio(metronomeSoundPath);
  metronomeSound.play();
};

export default {
  playNextRoundSound
};