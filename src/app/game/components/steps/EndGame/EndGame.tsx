import { GameStatus, useGameContext } from "@/contexts/GameContext";
import GameLost from "./GameLost/GameLost";
import GameWon from "./GameWon/GameWon";

const EndGame = () => {
  const { status } = useGameContext();

  if (status === GameStatus.WIN) return <GameWon />;

  return <GameLost />;
};

export default EndGame;
