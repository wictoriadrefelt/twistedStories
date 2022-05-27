

export const AudioPlay = (file: HTMLAudioElement | string) => {
    new Audio(`/src/${file}`).play();    //under folder public
  };