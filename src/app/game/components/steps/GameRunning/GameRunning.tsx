import { useGameContext } from "@/contexts/GameContext";
import useKeys from "@/hooks/useKeys/useKeys";
import { GameStatus } from "@/types/gameStatus";
import { playAudio, speedAudio } from "@/utils/audioManager";
import { useCallback, useEffect } from "react";
import Keys from "../../common/Keys/Keys";
import Timer from "../../common/Timer/Timer";
import "./GameRunning.scss";

const GameRunning = () => {
  const { totalTime, currentTime, setStatus } = useGameContext();
  const { keys, setKeys } = useKeys();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const leftKeys = keys.filter((key) => !key.isSuccess);
      const actualKey = leftKeys[0];

      if (actualKey?.code === event.key) {
        const updatedKeys = keys.map((key) =>
          key.code === actualKey.code ? { ...key, isSuccess: true } : key
        );

        setKeys(updatedKeys);

        if (leftKeys.length == 1) {
          setStatus(GameStatus.WIN);
        } else {
          playAudio("success");
        }
      } else {
        setStatus(GameStatus.LOSE);
      }
    },
    [keys, setKeys, setStatus]
  );

  const updateAudioSpeed = (progress: number) => {
    if (progress <= 25) {
      speedAudio("tick", 4);
    } else if (progress <= 50) {
      speedAudio("tick", 3);
    } else if (progress <= 75) {
      speedAudio("tick", 2);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, keys, setStatus]);

  useEffect(() => {
    const progress = (currentTime / totalTime) * 100;
    updateAudioSpeed(progress);
  }, [currentTime, totalTime]);

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
