import Button from "@/components/common/Button/Button";
import { GameStatus, useGameContext } from "@/contexts/GameContext";
import "./GameWon.scss";

const GameWon = () => {
  const { startGame, setStatus } = useGameContext();

  return (
    <>
      <div className="game">
        <p>É disso que eu to falando, uma máquina de reflexo!</p>
      </div>
      <div className="actions">
        <Button
          title="SAIR"
          className="quit-button"
          onClick={() => setStatus(GameStatus.IDLE)}
        />
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
