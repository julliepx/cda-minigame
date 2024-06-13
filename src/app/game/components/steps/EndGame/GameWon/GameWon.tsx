import Button from "@/components/common/Button/Button";
import { useGameContext } from "@/contexts/GameContext";
import { getRandomMessage } from "@/utils/messages";
import Link from "next/link";
import { useMemo } from "react";
import configs from "../../../../../../../public/configs/gameConfig.json";
import "./GameWon.scss";

const GameWon = () => {
  const { startGame } = useGameContext();
  const message = useMemo(() => getRandomMessage(configs.messages.win), []);

  return (
    <>
      <div className="game">
        <p>{message}</p>
      </div>
      <div className="actions">
        <Link href="/">
          <Button title="SAIR" className="quit-button" />
        </Link>
        <Button
          title="JOGAR NOVAMENTE"
          className="play-button"
          onClick={startGame}
        />
      </div>
    </>
  );
};

export default GameWon;
