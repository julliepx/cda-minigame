import { useGameContext } from "@/contexts/TimerContext";
import { useEffect } from "react";
import Keys from "../../common/Keys/Keys";
import Timer from "../../common/Timer/Timer";
import "./GameRunning.scss";

const GameRunning = () => {
  const { totalTime, currentTime } = useGameContext();

  const endGame = () => {};

  useEffect(() => {
    /* if (timesOut) resetTimer(); */
  }, []);

  return (
    <>
      <div className="game">
        <p>Pressione as teclas na ordem correta</p>
        <Keys />
      </div>
      <div className="timer-container">
        <Timer totalTime={totalTime} currentTime={currentTime} />
      </div>
    </>
  );
};

export default GameRunning;
