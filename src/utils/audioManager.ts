export type Audio = "success" | "tick" | "win" | "lost" | "explosion";

interface AudioConfiguration {
  volume?: number;
  loop?: boolean;
}

const CONFIGS = {
  loop: false,
  volume: 0.2,
  speed: 1,
};
export const getAudio = (audioId: Audio): HTMLAudioElement => {
  return document.getElementById(audioId) as HTMLAudioElement;
};

export const playAudio = (
  audioId: Audio,
  configs?: AudioConfiguration
): void => {
  const audio = getAudio(audioId);
  audio.currentTime = 0;
  audio.volume = configs?.volume ?? CONFIGS.volume;
  audio.loop = configs?.loop ?? CONFIGS.loop;
  audio.play();
};

export const speedAudio = (audioId: Audio, speed: number): void => {
  const audio = getAudio(audioId);
  audio.playbackRate = speed;
};

export const resetAudio = (audioId: Audio) => {
  const audio = getAudio(audioId);
  audio.currentTime = 0;
  audio.playbackRate = 1;
  audio.volume = 0.2;
  audio.pause();
};
