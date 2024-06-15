import { useGameContext } from "@/contexts/GameContext";
import useKeys from "@/hooks/useKeys/useKeys";
import { GameStatus } from "@/types/gameStatus";
import { playAudio } from "@/utils/audioManager";
import { AUDIO_SPEED_MAPPER } from "@/utils/gameAudioHandler";
import { updateKeys } from "@/utils/keys";
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
      const currentKey = leftKeys[0];

      if (currentKey?.code.toLowerCase() === event.key.toLowerCase()) {
        const updatedKeys = updateKeys(keys, currentKey);
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
    if ([25, 50, 75].includes(progress)) AUDIO_SPEED_MAPPER[progress]();
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
