import { GameStatus } from "@/types/gameStatus";
import { Audio } from "../types/audio";
import { playAudio, resetAudio } from "./audioManager";

const handleGameStatusAudio = (audio: Audio): void => {
  if (audio === "tick") {
    playAudio(audio, { loop: true, volume: 1 });
    return;
  }

  playAudio(audio);
  resetAudio("tick");
};

export const AUDIO_MAPPER: Record<GameStatus, () => void> = {
  [GameStatus.IDLE]: () => {},
  [GameStatus.PLAYING]: () => handleGameStatusAudio("tick"),
  [GameStatus.TIMES_UP]: () => handleGameStatusAudio("explosion"),
  [GameStatus.WIN]: () => handleGameStatusAudio("win"),
  [GameStatus.LOSE]: () => handleGameStatusAudio("lost"),
};
