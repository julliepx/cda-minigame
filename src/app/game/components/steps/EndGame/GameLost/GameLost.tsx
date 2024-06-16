import Button from "@/components/common/Button/Button";
import { useGameContext } from "@/contexts/GameContext";
import { getRandomMessage } from "@/utils/messages";
import Link from "next/link";
import { useMemo } from "react";
import configs from "../../../../../../../public/configs/gameConfig.json";
import "./GameLost.scss";

const GameLost = () => {
  const { resetGame } = useGameContext();
  const message = useMemo(() => getRandomMessage(configs.messages.lose), []);

  return (
    <>
      <div className="game">
        <p>{message}</p>
      </div>
      <div className="lost-actions">
        <Link href="/">
          <Button title="SAIR" className="quit-button" />
        </Link>
        <Button
          title="TENTAR NOVAMENTE"
          className="restart-button"
          onClick={() => resetGame()}
        />
      </div>
    </>
  );
};

export default GameLost;
