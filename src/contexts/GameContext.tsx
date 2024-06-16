"use client";
import useTimer from "@/hooks/useTimer/useTimer";
import { GameDifficulty, GameMode, GameStatus } from "@/types/game";
import { KeyType } from "@/types/keys";
import { Timer } from "@/types/timer";
import { AUDIO_MAPPER } from "@/utils/gameAudioHandler";
import { COLOR_MAPPER } from "@/utils/gameColorHandler";
import { getConfigDifficulty } from "@/utils/gameConfig";
import { setRootStyleProperty } from "@/utils/styles";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import config from "../../public/configs/gameConfig.json";

export interface GameContext extends Omit<Timer, "startTimer"> {
  totalTime: number;
  setTotalTime: Dispatch<SetStateAction<number>>;
  status: GameStatus;
  setStatus: Dispatch<SetStateAction<GameStatus>>;
  mode: GameMode;
  setMode: Dispatch<SetStateAction<GameMode>>;
  difficulty: GameDifficulty;
  setDifficulty: Dispatch<SetStateAction<GameDifficulty>>;
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
  numberOfKeys: number;
  setNumberOfKeys: Dispatch<SetStateAction<number>>;
  keyType: KeyType;
  startGame: (time?: number) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContext>({
  totalTime: config.difficulties[0].timeToSolve,
  setTotalTime: () => {},
  currentTime: config.difficulties[0].timeToSolve,
  timesOut: false,
  isTicking: true,
  status: GameStatus.PLAYING,
  setStatus: () => {},
  mode: GameMode.DEFAULT,
  setMode: () => {},
  difficulty: GameDifficulty.MEDIUM,
  setDifficulty: () => {},
  level: 1,
  setLevel: () => {},
  numberOfKeys: config.difficulties[0].numberOfKeys,
  setNumberOfKeys: () => {},
  keyType: "ALPHANUMERIC",
  startGame: () => {},
  resetGame: () => {},
});

interface GameContextProps {
  children: React.ReactNode;
}

function GameContextProvider(props: GameContextProps) {
  const initialTime = config.difficulties[0].timeToSolve * 1000;
  const initialNumberOfKeys = config.difficulties[0].numberOfKeys;
  const [totalTime, setTotalTime] = useState(initialTime);
  const [numberOfKeys, setNumberOfKeys] = useState(initialNumberOfKeys);
  const keyType = config.keyType as KeyType;

  const { currentTime, isTicking, timesOut, startTimer } = useTimer(totalTime);
  const [mode, setMode] = useState<GameMode>(GameMode.DEFAULT);
  const [difficulty, setDifficulty] = useState<GameDifficulty>(
    GameDifficulty.EASY
  );
  const [status, setStatus] = useState<GameStatus>(GameStatus.IDLE);
  const [level, setLevel] = useState(1);

  const startGame = useCallback(
    (time?: number) => {
      setStatus(GameStatus.PLAYING);
      setTotalTime(time ?? totalTime);
      startTimer(time);
    },
    [startTimer]
  );

  const resetGame = useCallback(() => {
    setStatus(GameStatus.PLAYING);

    const configDifficulty = getConfigDifficulty(difficulty);
    const time = configDifficulty.timeToSolve * 1000;

    setTotalTime(time);
    startTimer(time);
    setNumberOfKeys(configDifficulty.numberOfKeys);
  }, [startTimer]);

  useEffect(() => {
    AUDIO_MAPPER[status]();
    COLOR_MAPPER[status]();
    setRootStyleProperty("--tick-speed", "var(--tick-speed-0)");
  }, [mode, status]);

  useEffect(() => {
    if (timesOut && status === GameStatus.PLAYING)
      setStatus(GameStatus.TIMES_UP);
  }, [setStatus, status, timesOut]);

  const value: GameContext = {
    totalTime,
    setTotalTime,
    currentTime,
    timesOut,
    isTicking,
    status,
    setStatus,
    startGame,
    resetGame,
    mode,
    setMode,
    difficulty,
    setDifficulty,
    level,
    setLevel,
    numberOfKeys,
    setNumberOfKeys,
    keyType,
  };
  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
}

function useGameContext() {
  return useContext(GameContext);
}

export { GameContextProvider, useGameContext };
