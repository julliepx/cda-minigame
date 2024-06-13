import Button from "@/components/common/Button/Button";
import { useGameContext } from "@/contexts/GameContext";
import Link from "next/link";
import "./GameWon.scss";

const GameWon = () => {
  const { startGame } = useGameContext();

  return (
    <>
      <div className="game">
        <p>É disso que eu to falando, uma máquina de reflexo!</p>
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
