import Button from "@/components/common/Button/Button";
import { useGameContext } from "@/contexts/GameContext";
import "./GameLost.scss";

const GameLost = () => {
  const { startGame } = useGameContext();
  return (
    <>
      <div className="game">
        <p>Que feio, ta precisando melhorar hein!</p>
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
