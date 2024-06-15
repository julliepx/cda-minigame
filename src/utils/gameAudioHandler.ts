import { GameStatus } from "@/types/gameStatus";
import { Audio } from "../types/audio";
import { playAudio, resetAudio, speedAudio } from "./audioManager";
import { setRootStyleProperty } from "./styles";

const handleGameStatusAudio = (audio: Audio): void => {
  if (audio === "tick") {
    playAudio(audio, { loop: true, volume: 1 });
    return;
  }

  playAudio(audio);
  resetAudio("tick");
};

const handleAudioSpeed = (speed: number, progress: number): void => {
  speedAudio("tick", speed);
  setRootStyleProperty("--ticking-color", `var(--ticking-color-${progress})`);
  setRootStyleProperty("--tick-speed", `var(--tick-speed-${progress})`);
};

export const STATUS_AUDIO_MAPPER: Record<GameStatus, () => void> = {
  [GameStatus.IDLE]: () => {},
  [GameStatus.PLAYING]: () => handleGameStatusAudio("tick"),
  [GameStatus.TIMES_UP]: () => handleGameStatusAudio("explosion"),
  [GameStatus.WIN]: () => handleGameStatusAudio("win"),
  [GameStatus.LOSE]: () => handleGameStatusAudio("lost"),
};

export const AUDIO_SPEED_MAPPER: Record<number, () => void> = {
  25: () => handleAudioSpeed(7, 25),
  50: () => handleAudioSpeed(5, 50),
  75: () => handleAudioSpeed(3, 75),
};
