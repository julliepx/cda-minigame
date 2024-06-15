import { GameStatus } from "@/types/gameStatus";
import { setRootStyleProperty } from "./styles";

const handleGameStatusColor = (color: string): void => {
  setRootStyleProperty("--ticking-color", `var(${color})`);
};

export const COLOR_MAPPER: Record<GameStatus, () => void> = {
  [GameStatus.IDLE]: () => handleGameStatusColor("--ticking-color-0"),
  [GameStatus.PLAYING]: () => handleGameStatusColor("--ticking-color-0"),
  [GameStatus.TIMES_UP]: () => handleGameStatusColor("--ticking-color-lose"),
  [GameStatus.WIN]: () => handleGameStatusColor("--ticking-color-win"),
  [GameStatus.LOSE]: () => handleGameStatusColor("--ticking-color-lose"),
};
