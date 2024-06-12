import { GameStatus, useGameContext } from "@/contexts/GameContext";
import useKeys from "@/hooks/useKeys/useKeys";
import { useCallback, useEffect } from "react";
import Keys from "../../common/Keys/Keys";
import Timer from "../../common/Timer/Timer";
import "./GameRunning.scss";

const GameRunning = () => {
  const { totalTime, currentTime, setStatus, timesOut } = useGameContext();
  const { keys } = useKeys();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const leftKeys = keys.filter((key) => !key.isSuccess);
      const actualKey = leftKeys.at(0);

      if (actualKey?.code === event.key) {
        actualKey.isSuccess = true;

        if (leftKeys.length <= 1) {
          setStatus(GameStatus.WIN);
        }

        return;
      }

      setStatus(GameStatus.LOSE);
    },
    [keys, setStatus]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, keys, setStatus]);

  useEffect(() => {
    if (timesOut) setStatus(GameStatus.LOSE);
  }, [setStatus, timesOut]);

  return (
    <>
      <div className="game">
        <p>Pressione as teclas na ordem correta</p>
        <Keys keys={keys} />
      </div>
      <div className="timer-container">
        <Timer totalTime={totalTime} currentTime={currentTime} />
      </div>
    </>
  );
};

export default GameRunning;
