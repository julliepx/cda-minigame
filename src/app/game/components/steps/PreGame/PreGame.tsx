import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import Select from "@/components/common/Select/Select";
import { useGameContext } from "@/contexts/GameContext";
import {
  GameDifficulty,
  GameMode,
  reverseGameDifficulty,
  reverseGameMode,
} from "@/types/game";
import { getConfigDifficulty } from "@/utils/gameConfig";
import {
  LOCAL_STORAGE_KEYS,
  setItemToLocalStorage,
} from "@/utils/localStorageManager";
import { useState } from "react";
import "./PreGame.scss";

const PreGame = () => {
  const {
    startGame,
    mode,
    setMode,
    difficulty,
    setDifficulty,
    setNumberOfKeys,
  } = useGameContext();
  const [username, setUsername] = useState("");

  const start = () => {
    setItemToLocalStorage(LOCAL_STORAGE_KEYS.username, username);

    const configDifficulty = getConfigDifficulty(difficulty);

    setNumberOfKeys(configDifficulty.numberOfKeys);
    startGame(configDifficulty.timeToSolve * 1000);
  };

  return (
    <>
      <div className="configurations-container">
        <Input
          id="username"
          label="Nome de Usuário:"
          placeholder="Digite aqui..."
          maxLength={16}
          value={username}
          onChange={(v) => setUsername(v.currentTarget.value)}
          hint="O usuário será utilizado apenas para fins da exibição de ranking*"
        />
        <div className="configurations">
          <Select
            name="gameMode"
            id="gameMode"
            onChange={(mode) => setMode(mode.currentTarget.value as GameMode)}
          >
            {Object.entries(GameMode).map(([key, mode]) => (
              <option key={mode} value={reverseGameMode[key]}>
                {mode}
              </option>
            ))}
          </Select>
          {mode === GameMode.DEFAULT && (
            <Select
              name="difficulty"
              id="difficulty"
              onChange={(difficulty) =>
                setDifficulty(difficulty.currentTarget.value as GameDifficulty)
              }
            >
              {Object.entries(GameDifficulty).map(([key, difficulty]) => (
                <option key={difficulty} value={reverseGameDifficulty[key]}>
                  {difficulty}
                </option>
              ))}
            </Select>
          )}
        </div>
      </div>
      <Button
        title="INICIAR"
        hasFrame
        className="start-button"
        onClick={start}
      />
    </>
  );
};

export default PreGame;
