import { useGameContext } from "@/contexts/GameContext";
import { GameStatus } from "@/types/gameStatus";
import { updateRanking } from "@/utils/ranking";
import { useEffect } from "react";
import GameLost from "./GameLost/GameLost";
import GameWon from "./GameWon/GameWon";

const EndGame = () => {
  const { status, currentTime, totalTime } = useGameContext();

  useEffect(() => {
    updateRanking(currentTime, totalTime);
  }, []);

  if (status === GameStatus.WIN) return <GameWon />;

  return <GameLost />;
};

export default EndGame;
