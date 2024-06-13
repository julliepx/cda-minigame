import Button from "@/components/common/Button/Button";
import { useGameContext } from "@/contexts/GameContext";
import { getRandomMessage } from "@/utils/messages";
import { useMemo } from "react";
import configs from "../../../../../../../public/configs/gameConfig.json";
import "./GameLost.scss";

const GameLost = () => {
  const { startGame } = useGameContext();
  const message = useMemo(() => getRandomMessage(configs.messages.lose), []);

  return (
    <>
      <div className="game">
        <p>{message}</p>
      </div>
      <Button
        title="TENTAR NOVAMENTE"
        hasFrame
        className="restart-button"
        onClick={startGame}
      />
    </>
  );
};

export default GameLost;
