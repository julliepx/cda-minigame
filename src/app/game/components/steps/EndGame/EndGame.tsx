import { useGameContext } from "@/contexts/GameContext";
import { GameStatus } from "@/types/gameStatus";
import GameLost from "./GameLost/GameLost";
import GameWon from "./GameWon/GameWon";

const EndGame = () => {
  const { status } = useGameContext();

  if (status === GameStatus.WIN) return <GameWon />;

  return <GameLost />;
};

export default EndGame;
