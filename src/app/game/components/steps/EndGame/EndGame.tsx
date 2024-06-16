import { useGameContext } from "@/contexts/GameContext";
import { GameMode, GameStatus } from "@/types/game";
import { updateRanking } from "@/utils/ranking";
import { useEffect } from "react";
import GameRunning from "../GameRunning/GameRunning";
import GameLost from "./GameLost/GameLost";
import GameWon from "./GameWon/GameWon";

const EndGame = () => {
  const { status, currentTime, totalTime, mode, startGame, setNumberOfKeys } =
    useGameContext();

  useEffect(() => {
    if (status === GameStatus.WIN) {
      if (mode === GameMode.LEVELS) {
        setNumberOfKeys((keys) => keys + 2);
        startGame(totalTime - 1000);
        return;
      }

      updateRanking(currentTime, totalTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === GameStatus.WIN && mode == GameMode.LEVELS)
    return <GameRunning />;

  if (status === GameStatus.WIN && mode === GameMode.DEFAULT)
    return <GameWon />;

  return <GameLost />;
};

export default EndGame;
